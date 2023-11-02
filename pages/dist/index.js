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
var rich_text_react_renderer_1 = require("@contentful/rich-text-react-renderer");
var head_1 = require("next/head");
var reactstrap_1 = require("reactstrap");
var index_1 = require("../contentful/index");
var page_module_css_1 = require("./page.module.css");
function HomePage(_a) {
    var _b;
    var home = _a.home, articles = _a.articles;
    console.log("home", home);
    console.log("Articles", articles);
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, home.fields.title)),
        React.createElement("main", { className: page_module_css_1["default"].main },
            React.createElement("h1", { className: "mt-5" },
                " Title: ",
                home.fields.title),
            React.createElement("div", { className: "text-center p-5 text-white", style: {
                    background: "url(\"http:" + ((_b = home.fields.background) === null || _b === void 0 ? void 0 : _b.fields.file.url) + "\") no-repeat center / cover ",
                    paddingLeft: "80%"
                } }, home.fields.background.fields.title),
            React.createElement("div", { className: page_module_css_1["default"].description },
                React.createElement("div", null,
                    "Description 1: ",
                    home.fields.description.content[0].content[0].value),
                React.createElement("div", null,
                    "Description 2:",
                    " ",
                    home.fields.description.content[0].content[0].value +
                        home.fields.description.content[0].content[1].value),
                " ",
                React.createElement("div", { className: "mb-5" },
                    "Description 3: ",
                    rich_text_react_renderer_1.documentToReactComponents(home.fields.description)),
                " "),
            React.createElement(reactstrap_1.Container, { className: "pt-5" },
                React.createElement(reactstrap_1.Row, null, articles.map(function (article) {
                    return (React.createElement(reactstrap_1.Col, { sm: 4, key: article.fields.slug },
                        React.createElement(reactstrap_1.Card, { className: "p-3 " },
                            React.createElement(reactstrap_1.CardTitle, { tag: "h5" }, article.fields.title),
                            React.createElement(reactstrap_1.CardText, null, article.fields.description),
                            React.createElement(reactstrap_1.NavLink, { href: "/articles/" + article.fields.slug },
                                React.createElement(reactstrap_1.Button, null, article.fields.actions)))));
                }))))));
}
exports["default"] = HomePage;
exports.getStaticProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var home, articleEntries, homePage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.client.getEntries({
                    content_type: "home",
                    limit: 15
                })];
            case 1:
                home = _a.sent();
                return [4 /*yield*/, index_1.client.getEntries({
                        content_type: "article",
                        limit: 15,
                        select: "fields.title, fields.slug, fields.description, fields.actions, fields.content"
                    })];
            case 2:
                articleEntries = _a.sent();
                homePage = home.items[0];
                return [2 /*return*/, {
                        props: {
                            home: homePage,
                            articles: articleEntries.items
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
