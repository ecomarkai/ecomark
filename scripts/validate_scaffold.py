"""Validate scaffold syntax and internal example references; no live integration tests."""
import json
from pathlib import Path
import yaml

root = Path(__file__).resolve().parents[1]
excluded_directories = {
    '.git',
    '.next',
    '.pytest_cache',
    '.turbo',
    '.venv',
    '__pycache__',
    'node_modules',
}
files = sorted(
    path
    for path in root.rglob('*')
    if path.is_file() and not excluded_directories.intersection(path.parts)
)
for path in files:
    if path.suffix == '.json':
        json.loads(path.read_text())
    elif path.suffix == '.yaml' or path.name.endswith('.yaml.example'):
        yaml.safe_load(path.read_text())
workflow = yaml.safe_load((root / 'workflows/creative-experiment/workflow.yaml').read_text())
states = set(workflow['states']) | set(workflow['terminal_states'])
for state in workflow['states'].values():
    for key in ('next', 'ambiguous_result', 'unresolved'):
        if key in state:
            assert state[key] in states, state[key]
for catalog in ('agents', 'skills'):
    data = yaml.safe_load((root / catalog / 'registry.yaml' if catalog == 'skills' else root / catalog / 'catalog.yaml').read_text())
    for item in data[catalog]:
        assert (root / catalog / item['path']).is_dir(), item
print(f'Scaffold validation passed: {len(files)} files; workflow and catalog references resolved.')
print('No provider calls, deployment, application or load tests were performed.')
