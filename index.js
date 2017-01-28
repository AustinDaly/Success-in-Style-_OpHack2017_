const http  = require('http');
const fs    = require('fs');
const hostname = '192.168.1.8';
const port = 3000;

var files =
[
  "./Test.html"
];

var server = http.createServer( (req, res) =>
{
  fs.readFile(files[0], "utf8", function(err, data)
  {
    res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
  });
});

server.listen(port, hostname, () =>
{
	console.log('Server started on port '+port);
});
