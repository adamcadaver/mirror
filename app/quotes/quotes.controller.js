angular.module('magicMirror')
    .service('quotesService', function() {
            return {
                foo: "This is a famous quote"
            };
    })
    .controller('quotesController', ['quotesService' , function(quotesService) {
      this.foo = quotesService.foo;
    }]);