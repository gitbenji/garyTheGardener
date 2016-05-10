var app = {};

var express = require('express');
var http = require('http');

var port = 6080;

var e = app.e = express();
app.server = app.server = http.createServer(e);

app.server.listen(port, function() {
	console.log('Listening on port ' + port + '\n');
});

e.get('/webhook/', function (req, res) {

  if (req.query['hub.verify_token'] === 'monica') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})
