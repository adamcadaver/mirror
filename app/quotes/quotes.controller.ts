/// <reference path="../../typings/browser.d.ts" />

class QuotesController {
    static $inject = ["quotesService"];
    public foo;
    constructor(quotesService) {
        this.foo = quotesService.foo;
    }
}


angular.module("magicMirror")
    .controller("quotesController", QuotesController);
