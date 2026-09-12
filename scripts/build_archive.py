"""Generate an exact file index and the distributable scaffold archive."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
index = root / 'FILE_INDEX.md'
paths = sorted(p.relative_to(root).as_posix() for p in root.rglob('*') if p.is_file() and '__pycache__' not in p.parts)
if 'FILE_INDEX.md' not in paths:
    paths.append('FILE_INDEX.md')
paths.sort()
index.write_text('# Ecomark complete file index\n\nAll paths are relative to ecomark/. Entries include specifications and placeholders.\n\n```text\n' + '\n'.join(paths) + '\n```\n')
output = root.parent / 'ecomark-saas-file-structure.zip'
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for rel in paths:
        archive.write(root / rel, 'ecomark/' + rel)
with ZipFile(output) as archive:
    assert archive.testzip() is None
print(f'{output}: {len(paths)} files; ZIP integrity verified.')
