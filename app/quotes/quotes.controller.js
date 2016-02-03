angular.module('magicMirror')
    .controller('quotesController', ['quotesService' , function(quotesService) {
      this.foo = quotesService.foo;
    }]);