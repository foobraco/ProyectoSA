
/**
 * Module dependencies.
 */

require('newrelic'); 
var pg = require('pg');

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/crear_convenio', routes.crear_convenio);
app.get('/agregar_usuario', routes.agregar_usuario);
app.get('/agregar_cuenta', routes.agregar_cuenta);
app.get('/registrar_consorcio', routes.registrar_consorcio);
app.get('/configurar_servicio', routes.configurar_servicio);
app.get('/crear_convenio', routes.crear_convenio);


var port = process.env.PORT || 4000;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
