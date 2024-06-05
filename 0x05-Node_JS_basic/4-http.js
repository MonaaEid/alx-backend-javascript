const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
