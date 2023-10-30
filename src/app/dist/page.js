"use strict";
exports.__esModule = true;
var page_module_css_1 = require("./page.module.css");
function Home(_a) {
    var title = _a.title, home = _a.home;
    return (React.createElement("main", { className: page_module_css_1["default"].main },
        "123 ",
        title,
        React.createElement("div", { className: page_module_css_1["default"].description }, "1234"),
        React.createElement("h1", null, title)));
}
exports["default"] = Home;
