const port = 3000;

var express = require("express");
var app = express();

app.get('/', function(reg, res)
{
  res.send('Hello, world!');
});

app.listen(port, function(){
  console.log("Listening on port "+port);
});
