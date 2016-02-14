/// <reference path="../../typings/browser.d.ts" />

class QuotesController {
    static $inject: string[] = ["quotesService"];
    public foo: string;
    constructor(quotesService: IQuotesService) {
        this.foo = quotesService.foo;
    }
}


angular.module("magicMirror")
    .controller("quotesController", QuotesController);
