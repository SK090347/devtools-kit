import { readFileSync } from 'node:fs';
import { prettyJson } from '../lib/json.js';

export function runJsonPretty(args: string[]): number {
  const file = args[0];
  let raw: string;
  try {
    raw = file ? readFileSync(file, 'utf8') : readFileSync(0, 'utf8');
  } catch (err) {
    console.error(`json-pretty: failed to read input: ${(err as Error).message}`);
    return 1;
  }
  try {
    process.stdout.write(prettyJson(raw));
    return 0;
  } catch (err) {
    console.error(`json-pretty: invalid JSON: ${(err as Error).message}`);
    return 1;
  }
}
