// Create web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // ...existing code...
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
  // ...existing code...
});

server.listen(port, hostname, () => {
  // ...existing code...
  console.log(`Server running at http://${hostname}:${port}/`);
  // ...existing code...
});