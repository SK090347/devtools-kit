/** Pretty-print JSON text with stable formatting. Throws on invalid JSON. */
export function prettyJson(input: string, spaces = 2): string {
  const parsed: unknown = JSON.parse(input);
  return `${JSON.stringify(parsed, null, spaces)}\n`;
}
