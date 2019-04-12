const http = require('http');
const port = 3000;

// Handles HTTP requests.
const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
};

// Create a server and pass in the  requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on port 8000
server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});

var fs = require('fs');

fs.appendFile('hello-world.txt', 'Hello to this great world', function (err) {
  if (err) throw err;
  console.log('Complete')
});
