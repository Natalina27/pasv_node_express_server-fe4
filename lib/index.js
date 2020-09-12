'use strict';

var _express = _interopRequireDefault(require('express'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var app = (0, _express['default'])();
var PORT = 5000;
app.get('/', home);
app.get('/info', info);

function home(req, res) {
  res.send('PASV.');
}

function info(req, res) {
  var a = 123;
  var b = Math.random();
  var c = a + b;
  console.log(c);
  res.send('INFO here!');
}

app.listen(PORT, function () {
  console.log('Example app listening at http://localhost:'.concat(PORT));
});
