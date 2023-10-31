"use strict";
exports.__esModule = true;
exports.client = void 0;
var contentful = require("contentful");
exports.client = contentful.createClient({
    space: "ofpvgsovd02l",
    environment: "master",
    accessToken: "IsjfY3wmrWp2oj2Df1ah0hYT160ZFqL3hzUWI5uufOs"
});
exports.client
    .getEntry("2DBqg3CspNynqUmQc4E9V7")
    .then(function (entry) { return console.log(entry); })["catch"](console.error);
console.log("contentful api");
