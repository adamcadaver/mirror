// declare a module
var magicMirrorModule = angular.module('magicMirror', []);
magicMirrorModule.value('clientId', 'The Future Is Now');
magicMirrorModule
    .controller(
        'DemoController',
        ['clientId', function DemoController(clientId) {
            this.clientId = clientId;

}]);