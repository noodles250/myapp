var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendfile('./views/index.html');
});
app.get('/root', function (req, res) {
  res.sendfile('.root.txt');
});
var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
