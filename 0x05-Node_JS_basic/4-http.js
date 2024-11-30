const http = require('http');

const hostname = 'localhost';
const port = 1245;

function requestHandler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}

const server = http.createServer(requestHandler);

server.listen(port, hostname);

module.exports = server;
