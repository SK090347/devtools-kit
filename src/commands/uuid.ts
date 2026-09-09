import { createUuid } from '../lib/uuid.js';

export function runUuid(args: string[]): number {
  const count = args[0] ? Number.parseInt(args[0], 10) : 1;
  if (!Number.isFinite(count) || count < 1 || count > 1000) {
    console.error('uuid: count must be an integer 1..1000');
    return 1;
  }
  for (let i = 0; i < count; i++) {
    process.stdout.write(`${createUuid()}\n`);
  }
  return 0;
}
