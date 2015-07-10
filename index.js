"use strict";

var ccda2fhir = require('ccda2fhir');
var fhir2ccda = require('fhir2ccda');

exports.ccda2fhir = ccda2fhir.generate;
exports.fhir2ccda = fhir2ccda.generate;
