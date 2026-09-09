#!/usr/bin/env node
import { runHash } from './commands/hash.js';
import { runJsonPretty } from './commands/json-pretty.js';
import { runServeHeaders } from './commands/serve-headers.js';
import { runUuid } from './commands/uuid.js';

const HELP = `devtools-kit — small TypeScript CLI utilities

Usage:
  dtk <command> [args]

Commands:
  json-pretty [file]     Pretty-print JSON from file or stdin
  uuid [count]           Generate UUID v4 (default 1, max 1000)
  hash sha256 <str|->    SHA-256 hex digest of string or stdin
  serve-headers [port]   Mock HTTP server echoing request headers (default 8787)
  help                   Show this help

Examples:
  echo '{"a":1}' | dtk json-pretty
  dtk uuid 3
  dtk hash sha256 "hello"
  dtk serve-headers 9000
`;

function main(argv: string[]): number {
  const [cmd, ...args] = argv;
  switch (cmd) {
    case undefined:
    case 'help':
    case '--help':
    case '-h':
      process.stdout.write(HELP);
      return 0;
    case 'json-pretty':
      return runJsonPretty(args);
    case 'uuid':
      return runUuid(args);
    case 'hash':
      return runHash(args);
    case 'serve-headers':
      return runServeHeaders(args);
    default:
      console.error(`Unknown command: ${cmd}\n`);
      process.stdout.write(HELP);
      return 1;
  }
}

const code = main(process.argv.slice(2));
// serve-headers keeps the event loop alive; only exit for other commands
if (process.argv[2] !== 'serve-headers') {
  process.exit(code);
}
