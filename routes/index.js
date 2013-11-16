/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {  title: 'Proyecto SA' });
};

exports.crear_convenio = function(req, res){
    res.render('crear_convenio', { title: 'Crear Convenio' });
};

exports.agregar_usuario = function(req, res){
    res.render('agregar_usuario', { title: 'Agregar Usuario' });
};

exports.agregar_cuenta = function(req, res){
    res.render('agregar_cuenta', { title: 'Agregar Cuenta' });
};

exports.registrar_consorcio = function(req, res){
    res.render('registrar_consorcio', { title: 'Registrar Consorcio' });
};

exports.configurar_servicio = function(req, res){
    res.render('configurar_servicio', { title: 'Configurar Servicio' });
};
