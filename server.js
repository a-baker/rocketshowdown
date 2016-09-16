var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();
var http = require('http').Server(app);

var routes = require('./routes/index');
app.use('/', routes);

app.set('port', (process.env.PORT || 80));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

http.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});