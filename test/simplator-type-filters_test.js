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
});
