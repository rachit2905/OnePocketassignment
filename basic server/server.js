const http = require('http');
const app=express();
// Creating the server
const server = http.createServer((req, res) => {
  // Setting the response header
  res.setHeader('Content-Type', 'text/plain');

  // Writing the response
  res.write('Hello, World!');
  
  // Ending the response
  res.end();
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
