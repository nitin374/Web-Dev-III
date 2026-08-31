const http = require("http");

const port = 3000;

const server = http.createServer((request, response) => {
  console.log(`Request received: ${request.method} ${request.url}`);
  response.setHeader("Content-Type", "text/plain");

  if (request.url === "/") {
    response.statusCode = 200;
    response.end("Welcome to Node Server");
  } else if (request.url === "/about") {
    response.statusCode = 200;
    response.end("About Page");
  } else if (request.url === "/contact") {
    response.statusCode = 200;
    response.end("Contact Page");
  } else {
    response.statusCode = 404;
    response.end("404 - Page Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
