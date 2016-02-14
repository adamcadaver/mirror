/// <reference path="../../typings/browser.d.ts" />

class Quotes implements ng.IDirective {
    restrict: string = "E";
    templateUrl: string = "app/quotes/quotes.html";
    controller: string = "quotesController";
    controllerAs: string = "ctrl";

    static instance(): ng.IDirective {
        return new Quotes();
    }
}

angular.module("magicMirror")
    .directive("quotes", Quotes.instance);
