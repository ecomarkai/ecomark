"""Generate the AI-facing Ecomark repository inventory from the current worktree."""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INVENTORY_PATH = Path("docs/architecture/REPOSITORY_INVENTORY.json")
FILE_MAP_PATH = Path("docs/architecture/REPOSITORY_FILE_MAP.md")
SELF_PATHS = {INVENTORY_PATH.as_posix(), FILE_MAP_PATH.as_posix()}


def git_output(*args: str) -> str:
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True).strip()


def repository_files() -> list[str]:
    raw = subprocess.check_output(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard", "-z"], cwd=ROOT
    )
    paths = [value.decode() for value in raw.split(b"\0") if value]
    paths = [path for path in paths if path not in SELF_PATHS]
    return sorted(set(paths) | SELF_PATHS)


def area_for(path: str) -> str:
    if "/" not in path:
        return "repository-governance"
    return path.split("/", 1)[0]


def kind_for(path: str) -> str:
    item = Path(path)
    name = item.name
    suffix = item.suffix.lower()
    if path in SELF_PATHS:
        return "generated-inventory"
    if name == ".gitkeep":
        return "placeholder"
    if name in {"pnpm-lock.yaml", "package-lock.json", "yarn.lock"}:
        return "lockfile"
    if name in {"package.json", "pyproject.toml", "app.yaml", "service.yaml", "agent.yaml"}:
        return "manifest"
    if "tests/" in path or name.endswith((".test.ts", ".test.tsx", ".spec.ts", ".spec.tsx")):
        return "test"
    if "/evaluations/" in path or suffix == ".jsonl":
        return "evaluation"
    if path.startswith("contracts/") or "/contracts/" in path:
        return "contract"
    if suffix == ".md":
        return "documentation"
    if suffix in {".py", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".mts"}:
        return "source"
    if suffix in {".yaml", ".yml", ".json", ".toml", ".example"} or name.startswith(".env"):
        return "configuration"
    if suffix in {".css", ".scss", ".sass"}:
        return "style"
    if suffix in {".svg", ".png", ".jpg", ".jpeg", ".ico", ".webp"}:
        return "asset"
    return "other"


def state_for(path: str, kind: str, text: str | None) -> str:
    if path in SELF_PATHS:
        return "generated"
    if kind == "placeholder":
        return "placeholder"
    normalized = (text or "").lower()
    if kind == "source" and re.search(r"\braise\s+NotImplementedError\b", text or ""):
        return "stub"
    if kind == "evaluation" and '"status":"placeholder"' in normalized.replace(" ", ""):
        return "placeholder-data"
    if path in {
        "apps/web/src/app/layout.tsx",
        "apps/web/src/app/page.tsx",
        "apps/web/src/app/globals.css",
    }:
        return "generated-starter"
    if kind == "source" and text is not None:
        meaningful = [
            line.strip()
            for line in text.splitlines()
            if line.strip() and not line.strip().startswith(("//", "#", '"""'))
        ]
        if not meaningful:
            return "comment-only-stub"
        if path.startswith("agents/") or path.startswith("connectors/"):
            return "scaffold-source"
        return "implemented-source"
    if kind == "test":
        return "implemented-test"
    if kind in {"manifest", "configuration", "contract", "evaluation"}:
        return "specification"
    if kind == "documentation":
        return "documentation"
    return "present"


def readable_text(data: bytes) -> str | None:
    if b"\0" in data[:4096]:
        return None
    try:
        return data.decode("utf-8")
    except UnicodeDecodeError:
        return None


def summary_for(path: str, kind: str, text: str | None) -> str:
    if path == INVENTORY_PATH.as_posix():
        return "Generated machine-readable record for every repository file."
    if path == FILE_MAP_PATH.as_posix():
        return "Generated human-readable path and implementation-state map."
    if kind == "placeholder":
        return "Reserves an intended directory; contains no implementation."
    if text:
        for raw_line in text.splitlines():
            line = raw_line.strip().lstrip("#").strip()
            if not line or line.startswith(("{", "[", "---", "import ")):
                continue
            return " ".join(line.split())[:180]
    return f"{kind.replace('-', ' ').capitalize()} file."


def build_record(path: str) -> dict[str, object]:
    if path in SELF_PATHS:
        return {
            "path": path,
            "area": area_for(path),
            "kind": kind_for(path),
            "state": "generated",
            "bytes": None,
            "lines": None,
            "sha256": None,
            "summary": summary_for(path, "generated-inventory", None),
        }
    absolute = ROOT / path
    data = absolute.read_bytes()
    text = readable_text(data)
    kind = kind_for(path)
    return {
        "path": path,
        "area": area_for(path),
        "kind": kind,
        "state": state_for(path, kind, text),
        "bytes": len(data),
        "lines": None if text is None else len(text.splitlines()),
        "sha256": hashlib.sha256(data).hexdigest(),
        "summary": summary_for(path, kind, text),
    }


def markdown_map(records: list[dict[str, object]], metadata: dict[str, object]) -> str:
    grouped: dict[str, list[dict[str, object]]] = defaultdict(list)
    for record in records:
        grouped[str(record["area"])].append(record)

    lines = [
        "# Ecomark repository file map",
        "",
        "This generated index lists every tracked or non-ignored repository file in the current",
        "worktree. It describes presence and implementation state; it does not claim product readiness.",
        "Regenerate with `python scripts/generate_repository_inventory.py`.",
        "",
        f"- Snapshot revision: `{metadata['revision']}`",
        f"- Worktree: `{metadata['worktree_state']}`",
        f"- Files indexed: {metadata['file_count']}",
        "- The two generated inventory files intentionally omit self-hashes.",
        "",
        "State legend: `implemented-source` means substantive source exists, not that its integration or",
        "release checks pass. `scaffold-source`, `stub`, `comment-only-stub`, `placeholder-data`, and",
        "`placeholder` are not working implementation.",
        "",
    ]
    for area in sorted(grouped):
        lines.extend([f"## {area}", "", "| Path | Kind | State | Summary |", "|---|---|---|---|"])
        for record in grouped[area]:
            summary = str(record["summary"]).replace("|", "\\|")
            lines.append(
                f"| `{record['path']}` | {record['kind']} | {record['state']} | {summary} |"
            )
        lines.append("")
    return "\n".join(lines)


def main() -> None:
    records = [build_record(path) for path in repository_files()]
    kinds = Counter(str(record["kind"]) for record in records)
    states = Counter(str(record["state"]) for record in records)
    areas = Counter(str(record["area"]) for record in records)
    dirty = bool(git_output("status", "--porcelain"))
    metadata: dict[str, object] = {
        "schema_version": 1,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "revision": git_output("rev-parse", "HEAD"),
        "worktree_state": "dirty" if dirty else "clean",
        "file_count": len(records),
        "counts_by_area": dict(sorted(areas.items())),
        "counts_by_kind": dict(sorted(kinds.items())),
        "counts_by_state": dict(sorted(states.items())),
        "self_hash_policy": "Generated inventory files are indexed without byte, line, or hash values.",
    }
    payload = {"metadata": metadata, "files": records}
    inventory = ROOT / INVENTORY_PATH
    file_map = ROOT / FILE_MAP_PATH
    inventory.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n")
    file_map.write_text(markdown_map(records, metadata))
    print(f"Indexed {len(records)} files at revision {metadata['revision']} ({metadata['worktree_state']}).")
    print(f"Wrote {INVENTORY_PATH} and {FILE_MAP_PATH}.")


if __name__ == "__main__":
    main()
