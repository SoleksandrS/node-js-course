const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const url = req.url;
   if (url ==='/about') {
      res.write('<h1>about us page<h1>');
      res.write('<a href="/">Back<a>');
      res.end();
   } else if (url ==='/contact') {
      res.write('<h1>contact us page<h1>');
      res.write('<a href="/">Back<a>');
      res.end();
   } else {
      res.write('<h1>Hello World!<h1>');
      res.write('<h2>My name Oleks<h2>');
      res.write('<a href="/about">About<a>');
      res.write('<a href="/contact">Contact<a>');
      res.end();
   }
});

server.listen(port, () => {
 console.log(`server start at http://localhost:${port}/`);
});
