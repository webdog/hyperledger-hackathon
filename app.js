var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Hackathon!');
});

app.listen(6000, function () {
  console.log('Boilerplate app listening on port 6000');
});
