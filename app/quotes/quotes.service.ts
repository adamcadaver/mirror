/// <reference path="../../typings/browser.d.ts" />

interface IQuotesService {
    foo: string;
}

class QuotesService implements IQuotesService {
    public foo: string;
    constructor() {
        this.foo = "This is a famous quote";
    }
}


angular.module("magicMirror")
    .service("quotesService", QuotesService);
