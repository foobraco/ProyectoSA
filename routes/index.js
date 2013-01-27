
/*
 * GET home page.
 */

var name = 'Tomato Bids'


exports.index = function(req, res){
/*        if(Object.keys(req.query).length !== 0){
	  var randVal = 1+(Math.random()*(10000-1));
          var randNum = Math.round(randVal);
          var newBid = new modelo_bid({ user:req.query.username, product:req.query.product, bid_money:randNum });
          newBid.save(function (err) {
          if (err) // ...
            console.log('meow');
          });
            
        }
	bi = pujas;
	json_bids = JSON.parse(JSON.stringify(bi)) */
  res.render('index', { title: 'SMSJobs', anothervar: 'Property of 502 Studios'});
};

exports.solicitantes = function(req, res){
  if(Object.keys(req.query).length !== 0){
    var habilidades = [req.query.Habilidad1,req.query.Habilidad2,req.query.Habilidad3];
    var newEmployee = new modelo_solicitantes({   
        name: req.query.Nombre,
        gender: req.query.Genero,
        phone: '+502'+req.query.Telefono,
        age: req.query.Edad,
        skills: habilidades,
        department : req.query.Departamento,
        city: req.query.Municipio });
      newEmployee.save(function (err) {
      if (err) // ...
        console.log('error');
      });
    }
  res.render('regempleado', { title: 'SMSJobs', anothervar: 'Property of 502 Studios'});  
};

exports.empleadores = function(req, res){
   if(Object.keys(req.query).length !== 0){
      var newEmployer = new modelo_empleadores({   
      company_name: req.query.Organizacion,
      contact_name: req.query.Nombre,
      contact_phone: req.query.Telefono,
      contact_email: req.query.Email,
      adress: req.query.Direccion 
      });
      newEmployer.save(function (err) {
      if (err) // ...
        console.log('error');
      });
    }  
    res.render('regempleador', { title: 'SMSJobs', anothervar: 'Property of 502 Studios'});  
};

exports.empleo = function(req, res){
	if(Object.keys(req.query).length !== 0){
      var habilidades = [req.query.Habilidad1,req.query.Habilidad2,req.query.Habilidad3];
      var newJob = new modelo_empleos({   
          name: req.query.Nombre,
          description: req.query.Desc,
          skills: habilidades,
          department: req.query.Departamento,
          city: req.query.Municipio
        });
    newJob.save(function (err) {
          if (err) // ...
            console.log('meow');
          });
    Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
    };
    

          modelo_solicitantes.find({'skills':{ $in : newJob.skills},'city':newJob.city,'department':newJob.department}).exec(function(err,coincidencia){

    // modelo_empleos.find({limit: 1,sort:{ _id : -1 }}).exec(function(err,trabajo){
    //       modelo_solicitantes.find({'skills':{ $in : trabajo.skills},'city':trabajo.city,'department':trabajo.department}).exec(function(err,coincidencia){
              for(var count=0;count<Object.size(coincidencia);count++){
                console.log(coincidencia[count]);
                //Send an SMS text message
                client.sendSms({

                    to:coincidencia[count].phone, // Any number Twilio can deliver to
                    from: '+12407529041', // A number you bought from Twilio and can use for outbound communication
                    body: newJob.name+'  '+newJob.description+', el codigo de trabajo es '+newJob._id+' Para mas informacion llamar a 555-555-5555'

                }, function(err, responseData) { //this function is executed when a response is received from Twilio

                    if (!err) { 

                    }
                });
              }
          });
       
               // client.sendSms({

               //      to:'+50240015171', // Any number Twilio can deliver to
               //      from: '+12407529041', // A number you bought from Twilio and can use for outbound communication
               //      body: 'Hello from Chevy Chase'

               //  }, function(err, responseData) { //this function is executed when a response is received from Twilio

               //      if (!err) { 

               //      }
               //  });
    }

  res.render('empleo', { title: 'SMSJobs'});
};
