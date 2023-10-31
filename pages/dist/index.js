"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getStaticProps = void 0;
var page_module_css_1 = require("./page.module.css");
var index_1 = require("../contentful/index");
var head_1 = require("next/head");
function HomePage(_a) {
    var home = _a.home;
    console.log(home);
    console.log("Title", home.fields.title);
    console.log("description", home.fields.description.content[0].content[0].value);
    console.log("fields", home.fields);
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, home.fields.title)),
        React.createElement("main", { className: page_module_css_1["default"].main },
            "Title: ",
            home.fields.title,
            React.createElement("div", { className: page_module_css_1["default"].description },
                "Description: ",
                home.fields.description.content[0].content[0].value),
            React.createElement("h1", null))));
}
exports["default"] = HomePage;
exports.getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var home, homePage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.client.getEntries({
                    content_type: "home",
                    limit: 15
                })];
            case 1:
                home = _a.sent();
                homePage = home.items[0];
                return [2 /*return*/, {
                        props: {
                            title: "Apricus IT",
                            home: homePage
                        }
                    }];
        }
    });
}); };
// interface HomePageType {
//   home: {
//     fields: {
//       description: {
//         content: [
//           {
//             content: [
//               {
//                 value: string;
//               },
//             ];
//           },
//         ];
//       };
//       title: string;
//     };
//   };
// }
