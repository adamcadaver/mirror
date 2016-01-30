// declare a module
var magicMirrorModule = angular.module('magicMirror', []);
magicMirrorModule.value('clientId', 'a12345654321x');
magicMirrorModule
    .controller(
        'DemoController',
        ['clientId', function DemoController(clientId) {
            this.clientId = clientId;
}]);