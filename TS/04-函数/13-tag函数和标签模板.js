var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//tag函数和标签模板
// @ts-ignore
var name = "xainjs";
function htmlEscape(listerals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = '';
    for (var i = 0; i < placeholders.length; i++) {
        result += listerals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp')
            .replace(/"/g, '&quot')
            .replace(/'/g, '&#39')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt');
    }
    result += listerals[listerals.length - 1];
    return result;
}
var html = htmlEscape(__makeTemplateObject(["<h1>", "</h1>"], ["<h1>", "</h1>"]), name);
console.log(html); //<h1>xainjs</h1>
//# sourceMappingURL=13-tag函数和标签模板.js.map