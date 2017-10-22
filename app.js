var express = require('express');
app.use(express.static('public'));
var app = express();
app.get('/', function (req, res) {
  res.sendfile('./views/index.html');
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
