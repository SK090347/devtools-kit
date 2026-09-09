import { createServer } from 'node:http';

/**
 * Tiny mock HTTP server that echoes request method/path and response headers.
 * Useful for debugging clients — not a production server.
 */
export function runServeHeaders(args: string[]): number {
  const port = args[0] ? Number.parseInt(args[0], 10) : 8787;
  if (!Number.isFinite(port) || port < 1 || port > 65535) {
    console.error('serve-headers: port must be 1..65535');
    return 1;
  }

  const server = createServer((req, res) => {
    const body = JSON.stringify(
      {
        method: req.method,
        url: req.url,
        headers: req.headers,
      },
      null,
      2,
    );
    res.writeHead(200, {
      'content-type': 'application/json; charset=utf-8',
      'x-devtools-kit': 'serve-headers',
      'cache-control': 'no-store',
    });
    res.end(body);
  });

  server.listen(port, () => {
    console.error(`serve-headers: listening on http://127.0.0.1:${port}`);
    console.error('Press Ctrl+C to stop.');
  });

  server.on('error', (err) => {
    console.error(`serve-headers: ${err.message}`);
    process.exitCode = 1;
  });

  return 0;
}
