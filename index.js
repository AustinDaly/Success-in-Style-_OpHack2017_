const http = require('http');

const hostname = '192.168.1.8';
const port = 3000;

var server = http.createServer( (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('okay');
});

server.listen(port, hostname, () =>
{
	console.log('Server started on port '+port);
});