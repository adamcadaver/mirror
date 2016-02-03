describe('quotesController', function() {
  beforeEach(module('magicMirror'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('test test', function() {
    it('sistes', function() {
      var quotesService = {
        foo : "smiles"
      };
      var controller = $controller('quotesController',
        { quotesService: quotesService });

      expect(controller.foo).toEqual('smiles');
    });
  });
});