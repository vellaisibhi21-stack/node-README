const { createServer } = require('../src/server');

describe('[feat-2] Health endpoint', () => {
  let server;
  let baseUrl;

  beforeAll(done => {
    server = createServer();
    server.listen(0, () => {
      baseUrl = `http://127.0.0.1:${server.address().port}`;
      done();
    });
  });

  afterAll(done => {
    server.close(done);
  });

  test('GET /health reports ok', async () => {
    const response = await fetch(`${baseUrl}/health`);
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/json');
    expect(await response.json()).toEqual({ status: 'ok' });
  });

  test('unknown routes return 404', async () => {
    const response = await fetch(`${baseUrl}/missing`);
    expect(response.status).toBe(404);
    expect(await response.json()).toEqual({ error: 'Not found' });
  });
});
