
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

//var indexRoutes = require('./routes/index')();
var models = require('./models/person')(mongoose);
var servies = require('./services/service')(models);
var personRoutes = require('./routes/person')(servies);

app.get('/', personRoutes.index);

app.get('/person/index', personRoutes.index);

app.get('/person/create', personRoutes.create);
app.post('/person/create', personRoutes.create);

app.get('/person/edit/:id', personRoutes.edit);
app.put('/person/edit/:id', personRoutes.edit);

app.get('/person/delete/:id', personRoutes.delete);
app.delete('/person/delete/:id', personRoutes.delete);


app.listen(3000, function(){
    console.log('Express server listening on port ' + app.get('port'));
});
