var assert = require('assert')
  , routes = require('../routes')
  , should = require('should')
  ;

   var request = {};
    var response = {
    viewName: ""
    , data : {}
    , render: function(view, viewData) {
        this.viewName = view;
        this.data = viewData;
    }
    };

describe("Routing", function(){
    describe("Home page", function(){
        it("should provide the a title and the index view name", function(){
        routes.index(request, response);
        response.viewName.should.equal("index");
        });
    });

    describe("Home page", function(){
        it("should provide the a title and the agregar_cuenta view name", function(){
        routes.agregar_cuenta(request, response);
        response.viewName.should.equal("agregar_cuenta");
        });
    });

    describe("Home page", function(){
        it("should provide the a title and the agregar_usuario view name", function(){
        routes.agregar_usuario(request, response);
        response.viewName.should.equal("agregar_usuario");
        });
    });

    describe("Home page", function(){
        it("should provide the a title and the crear_convenio view name", function(){
        routes.crear_convenio(request, response);
        response.viewName.should.equal("crear_convenio");
        });
    });

    describe("Home page", function(){
        it("should provide the a title and the index view name", function(){
        routes.index(request, response);
        response.viewName.should.equal("index");
        });
    });

    describe("Home page", function(){
        it("should provide the a title and the index view name", function(){
        routes.index(request, response);
        response.viewName.should.equal("index");
        });
    });
});
  
// describe('index', function() {
//   it('should return the index page', function() {
    
//     routes.index(req,res);
    
//     res.statusCode.should.eql(200);
//   });
// });


describe('truth', function () {
  it('should be true', function () {
    var myvar = true;
    myvar.should.be.true;
  });
});