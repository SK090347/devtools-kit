import { readFileSync } from 'node:fs';
import { sha256Hex } from '../lib/hash.js';

export function runHash(args: string[]): number {
  const [alg, ...rest] = args;
  if (!alg || alg.toLowerCase() !== 'sha256') {
    console.error('hash: usage: hash sha256 <string|->');
    console.error('  Only sha256 is supported in this focused toolkit.');
    return 1;
  }
  const target = rest[0];
  let input: string;
  try {
    if (!target || target === '-') {
      input = readFileSync(0, 'utf8');
    } else {
      input = target;
    }
  } catch (err) {
    console.error(`hash: ${(err as Error).message}`);
    return 1;
  }
  process.stdout.write(`${sha256Hex(input)}\n`);
  return 0;
}
