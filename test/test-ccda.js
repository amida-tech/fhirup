"use strict";

var path = require('path');
var fs = require('fs');

var chai = require('chai');

var ccda2fhir = require('../lib/ccda2fhir');
var fhir2ccda = require('../lib/fhir2ccda');

var expect = chai.expect;

describe('ccda', function () {
    it('CCD_1.xml', function (done) {
        var filepath = path.join(__dirname, 'fixtures/CCD_1.xml');
        var xml = fs.readFileSync(filepath);
        console.time('ccda');
        var result = ccda2fhir.generate(xml, function (err, result) {
            if (!err) {
                console.timeEnd('ccda');
                console.log(JSON.stringify(result, undefined, 4));
            }
            done(err);
        });
    });
});
