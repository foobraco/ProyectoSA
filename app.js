/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');


require('newrelic'); 
var pg = require('pg');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/agregar_cuenta', routes.agregar_cuenta);
app.get('/agregar_usuario', routes.agregar_usuario);
app.get('/crear_convenio', routes.crear_convenio);


server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  //a=setInterval(everyone.now.buscar_prods,200);
  //console.log(a);
});



