/// <reference path="../../typings/browser.d.ts" />
/// <reference path="quotes.d.ts" />

class QuotesService implements IQuotesService {
    public foo: string;
    constructor() {
        this.foo = "This is a famous quote";
    }
}

angular.module("magicMirror")
    .service("quotesService", QuotesService);
