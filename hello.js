const http = require('http');
const exp = require('express')
const port = 8080;
const convertCurrency = require('./currency')
const converter = new convertCurrency(1)

const server = http.createServer((req, res) => {
  res.end('Hello, world. Today currency rate');
});

server.listen(port, () => {
  console.log('Server listening on: http://localhost:%s', port);
  console.log('Hello, world. Today currency rate %s',converter.canadianToUS());
});