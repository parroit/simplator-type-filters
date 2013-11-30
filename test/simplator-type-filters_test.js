'use strict';

var expect = require("expect.js");
var simplator_type_filters = require("../lib/simplator-type-filters");
var simplator = require("simplator");


describe("simplator_type_filters", function () {
    it("is defined", function () {
        expect(simplator_type_filters).to.be.an('object');
    });


    it("register on load", function () {
        var tmpl = simplator.compile("{0 | simplatorTypeFilters}");
        expect(tmpl()).to.be.equal('simplator-type-filters ver 0.1.0');
    });

    describe("date", function () {
        it("is defined", function () {
            var tmpl = simplator.compile("{0 | date}");
            expect(tmpl()).to.be.equal('1970-01-01T01:00:00+01:00');
        });

        it("accept format", function () {
            var tmpl = simplator.compile("{now | date('DD/MM/YYYY')}");
            expect(tmpl({now:1385835352782})).to.be.equal('30/11/2013');
        });
    });

    describe("number", function () {
        it("is defined", function () {
            var tmpl = simplator.compile("{n | number}");
            expect(tmpl({n:42})).to.be.equal('42');
        });

        it("use locale for decimals", function () {
            var tmpl = simplator.compile("{n | number(2,',')}");
            expect(tmpl({n:4.2})).to.be.equal('4,20');
        });

        it("use locale for thowsand", function () {
            var tmpl = simplator.compile("{n | number(0,',','.')}");
            expect(tmpl({n:40200})).to.be.equal('40.200');
        });

    });

    describe("currency", function () {
        it("is defined", function () {
            var tmpl = simplator.compile("{n | currency}");
            expect(tmpl({n:42})).to.be.equal('$42.00');
        });

        it("use locale for decimals", function () {
            var tmpl = simplator.compile("{n | currency('€',3,',')}");
            expect(tmpl({n:4.2})).to.be.equal('€4,200');
        });

        it("use locale for thowsand", function () {
            var tmpl = simplator.compile("{n | currency('€',2,',','.')}");
            expect(tmpl({n:40200})).to.be.equal('€40.200,00');
        });

    });


});
