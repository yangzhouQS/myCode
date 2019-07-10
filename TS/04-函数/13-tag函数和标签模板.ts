//tag函数和标签模板
// @ts-ignore
let name: number = "xainjs";

function htmlEscape(listerals, ...placeholders) {
    let result = '';
    for (let i = 0; i < placeholders.length; i++) {
        result += listerals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp')
            .replace(/"/g, '&quot')
            .replace(/'/g, '&#39')
            .replace(/</g, '&lt')
            .replace(/>/g, '&gt')
    }
    result += listerals[listerals.length - 1];
    return result;
}

let html = htmlEscape`<h1>${name}</h1>`;
console.log(html);//<h1>xainjs</h1>
