"use strict";

var jsonave = require('jsonave');
var _ = require('lodash');
var xml2js = require('xml2js');

var sectionsPath = jsonave.instance('$..section[0]');

exports.generate = function (ccda, callback) {
    xml2js.parseString(ccda, function (err, parsedCCDA) {
        if (err) {
            callback(err);
        } else {
            var sections = sectionsPath(parsedCCDA);
            var allergies = _.find(sections, function (section) {
                var templateIds = section.templateId;
                if (templateIds) {
                    for (var i = 0; i < templateIds.length; ++i) {
                        var root = _.get(templateIds[i], '$.root');
                        if (root === '2.16.840.1.113883.10.20.22.2.6' || root === '2.16.840.1.113883.10.20.22.2.6') {
                            return true;
                        }
                    }
                }
                return false;
            });
            callback(null, allergies);
        }
    });
};
