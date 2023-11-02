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
var icons_1 = require("@ant-design/icons");
var rich_text_react_renderer_1 = require("@contentful/rich-text-react-renderer");
var antd_1 = require("antd");
var head_1 = require("next/head");
var react_1 = require("react");
var index_1 = require("../contentful/index");
var page_module_css_1 = require("./page.module.css");
var reactstrap_1 = require("reactstrap");
var Meta = antd_1.Card.Meta;
function HomePage(_a) {
    var _b, _c, _d, _e;
    var home = _a.home, articles = _a.articles;
    console.log("home", home);
    console.log("Articles", articles);
    // ========================================ANTD
    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];
    var onChange = function (checked) {
        setLoading(!checked);
    };
    // ========================================ANTD
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, home.fields.title)),
        React.createElement("main", { className: page_module_css_1["default"].main },
            React.createElement("h1", { className: "mt-5" },
                " Title: ",
                home.fields.title),
            React.createElement("div", null,
                React.createElement(antd_1.Image, { alt: "" + home.fields.background.fields.title, className: "text-center p-5 text-white", width: 300, src: "http:" + ((_c = (_b = home.fields.background) === null || _b === void 0 ? void 0 : _b.fields.file) === null || _c === void 0 ? void 0 : _c.url), preview: {
                        src: "http:" + ((_e = (_d = home.fields.background) === null || _d === void 0 ? void 0 : _d.fields.file) === null || _e === void 0 ? void 0 : _e.url)
                    } })),
            React.createElement("div", { className: "mb-5" },
                "Description: ",
                rich_text_react_renderer_1.documentToReactComponents(home.fields.description)),
            " ",
            React.createElement("div", { className: page_module_css_1["default"].articles },
                " ",
                React.createElement(antd_1.Switch, { checked: !loading, onChange: onChange }),
                articles.map(function (article) {
                    return (React.createElement("div", { key: article.fields.slug },
                        React.createElement(antd_1.Card, { style: { width: 300, marginTop: 16 }, actions: [
                                React.createElement(reactstrap_1.NavLink, { href: "/articles/" + article.fields.slug, key: "read" },
                                    React.createElement(icons_1.ReadOutlined, null)),
                            ] },
                            React.createElement(antd_1.Skeleton, { loading: loading, avatar: true, active: true },
                                React.createElement(Meta, { avatar: React.createElement(antd_1.Avatar, { src: "https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" }), title: article.fields.title, description: article.fields.description })))));
                })))));
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
                        limit: 15
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
