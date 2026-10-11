# LaneSync Starter (Node.js)

A minimal Node.js project scaffolded by LaneSync with a working CI pipeline.

## Setup

**Prerequisites:** Node.js 20 or later and npm.

```bash
git clone https://github.com/vellaisibhi21-stack/node-README.git
cd node-README
npm install
```

| Command | What it does |
|---------|--------------|
| `npm test` | Runs the Jest suite with HTML and coverage reports |
| `npm start` | Runs the sample program in `src/index.js` |

## Contributing

Releases are governed by LaneSync using [`sdlc.yaml`](sdlc.yaml):

- Name feature branches `feature/{issue-number}-{short-title}`, for example `feature/3-document-setup-in-readme`. Use **Start work** in LaneSync to create one. GitHub rejects other branch names.
- Open a pull request into `main` and reference the issue (`Fixes #3`).
- Merging requires one approval and passing `SDLC Enforce` and `CI — Build & Test` checks.
- Coverage must stay at or above 80% of lines.

CI runs automatically on every PR and push via `.github/workflows` (managed by LaneSync).
Replace the sample code in `src/` and tests in `__tests__/` with your own.
