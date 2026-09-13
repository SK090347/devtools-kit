# devtools-kit

[![Vitest](https://img.shields.io/badge/tested%20with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![License: MIT OR Apache-2.0](https://img.shields.io/badge/License-MIT%20OR%20Apache--2.0-blue.svg)](./NOTICE)

Small, focused TypeScript CLI for everyday engineering tasks. Ships as `devtools-kit` / `dtk`.

**Author:** [Sumit Kumar Ta](https://github.com/SK090347)

## Commands

| Command | Purpose |
|---------|---------|
| `json-pretty [file]` | Pretty-print JSON from a file or stdin |
| `uuid [count]` | Generate UUID v4 (1–1000) |
| `hash sha256 <str\|->` | SHA-256 hex digest |
| `serve-headers [port]` | Mock HTTP server that echoes request headers |

## Install

```bash
git clone https://github.com/SK090347/devtools-kit.git
cd devtools-kit
npm install
npm run build
npm link   # optional: puts `dtk` on your PATH
```

## Usage

```bash
# Pretty JSON
echo '{"z":1,"a":[true]}' | dtk json-pretty
dtk json-pretty ./payload.json

# UUIDs
dtk uuid
dtk uuid 5

# Hash
dtk hash sha256 "hello"
echo -n "hello" | dtk hash sha256 -

# Mock headers server (Ctrl+C to stop)
dtk serve-headers 8787
curl -s http://127.0.0.1:8787/health | dtk json-pretty
```

## Develop

```bash
npm test
npm run typecheck
npm run build
```

Pure helpers under `src/lib/` are unit-tested with Vitest; CLI commands are thin wrappers.

## Design choices

- **Focused surface** — four commands, no plugin framework
- **Node builtins only** for runtime crypto/http (no heavy deps)
- **Fail loud** on invalid JSON / bad args with non-zero exit codes

## License

Dual-licensed under [MIT](./LICENSE) and [Apache-2.0](./LICENSE-APACHE). See [NOTICE](./NOTICE).

MIT / Apache-2.0 © Sumit Kumar Ta
