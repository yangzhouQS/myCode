//有剩余参数的函数
//剩余的参数保存为数组列表
function add(...foo) {
    let result = foo.reduce((a, b) => a + b);
    return result;
}

console.log(add(1, 2, 3, 4, 5, 6));//21
