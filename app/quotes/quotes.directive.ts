/// <reference path="../../typings/browser.d.ts" />

angular.module('magicMirror')
.directive('quotes', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/quotes/quotes.html',
    controller: 'quotesController',
    controllerAs: 'ctrl'
  };
});