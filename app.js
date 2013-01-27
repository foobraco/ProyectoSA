/**
 * Module dependencies.
 */

client = require('twilio')('AC9682b566fe7d18db644746d0a63e75bb', '90dee41ddcf9c3ed9cc6b15358c8c561');
var nowjs = require('now'); 
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , mongoose = require('mongoose')
  , path = require('path');

mongoose.connect('mongodb://localhost/smsdb');

var Schema=mongoose.Schema
jobs=new Schema({   
  name: String,
  description: String,
  skills: [String],
  department: String,
  city: String
});

modelo_empleos = mongoose.model('jobs',jobs);
empleos=[]

employers=new Schema({   
  company_name: String,
  contact_name: String,
  contact_phone: String,
  contact_email: String,
  adress: String
});

empleadores=[]
modelo_empleadores = mongoose.model('employers',employers);

employees=new Schema({   
  name: String,
  gender: String,
  phone: String,
  age: Number,
  skills: [String],
  department: String,
  city: String
});

solicitantes = [];
modelo_solicitantes = mongoose.model('employees',employees);



var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
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
app.get('/empleo', routes.empleo);
app.get('/solicitante', routes.solicitantes);
app.get('/empleador', routes.empleadores);


server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
  //a=setInterval(everyone.now.buscar_prods,200);
  //console.log(a);
});



