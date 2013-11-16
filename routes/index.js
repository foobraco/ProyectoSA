/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Proyecto SA' });
};

exports.crear_convenio = function(req, res){
	  res.render('index', { title: 'Crear Convenio' });
};

exports.agregar_usuario = function(req, res){
	  res.render('index', { title: 'Agregar Usuario' });
};

exports.agregar_cuenta = function(req, res){
	  res.render('index', { title: 'Agregar Cuenta' });
};

exports.registrar_consorcio = function(req, res){
	  res.render('index', { title: 'Registrar Consorcio' });
};

exports.configurar_servicio = function(req, res){
	  res.render('index', { title: 'Configurar Servicio' });
};

exports.crear_convenio = function(req, res){
	  res.render('index', { title: 'Crear Convenio' });
};