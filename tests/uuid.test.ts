import { describe, expect, it } from 'vitest';
import { createUuid } from '../src/lib/uuid.js';

const UUID_V4 =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe('createUuid', () => {
  it('returns RFC4122 version 4 shaped ids', () => {
    const id = createUuid();
    expect(id).toMatch(UUID_V4);
  });

  it('produces unique values across calls', () => {
    const set = new Set(Array.from({ length: 50 }, () => createUuid()));
    expect(set.size).toBe(50);
  });
});
