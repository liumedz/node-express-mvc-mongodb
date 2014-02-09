
/**
 * Module dependencies.
 */

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

app.configure(function(){
    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('db-path', 'mongodb://localhost/monogdb-codekata');
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(express.bodyParser());
    app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.errorHandler());
    app.use(app.router);
});


mongoose.connect(app.get('db-path'));

var indexRoutes = require('./routes/index')();
var servies = require('./services/data-service')(mongoose);
var personRoutes = require('./routes/person')(servies);
var api = require("./api/data")(app, servies);

app.get('/', indexRoutes.index);

app.get('/person/index', personRoutes.index);
app.get('/person/create', personRoutes.create);
app.get('/person/edit', personRoutes.edit);
app.get('/person/delete', personRoutes.delete);

app.listen(3000, function(){
    console.log('Express server listening on port ' + app.get('port'));
});
