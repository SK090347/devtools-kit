import { describe, expect, it } from 'vitest';
import { prettyJson } from '../src/lib/json.js';

describe('prettyJson', () => {
  it('formats compact JSON', () => {
    expect(prettyJson('{"b":1,"a":2}')).toBe('{\n  "b": 1,\n  "a": 2\n}\n');
  });

  it('throws on invalid JSON', () => {
    expect(() => prettyJson('{')).toThrow();
  });

  it('respects indent spaces', () => {
    expect(prettyJson('{"x":true}', 4)).toContain('    "x"');
  });
});
