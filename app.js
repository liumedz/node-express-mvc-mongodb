
/**
 * Module dependencies.
 */

var express = require('express');
var indexRoutes = require('./routes/index')();
var personRoutes = require('./routes/person')();
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var servies = require('./services/data-service')(mongoose);
var api = require("./api/data")(app, servies);

var dbPath = 'mongodb://localhost/monogdb-codekata';



// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(dbPath);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', indexRoutes.index);

app.get('/person/index', personRoutes.index);
app.get('/person/create', personRoutes.create);
app.get('/person/edit', personRoutes.edit);
app.get('/person/delete', personRoutes.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
