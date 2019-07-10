//使用泛型变量
//泛型函数
/*
* 传递进来的如果是数字,就没有length属性,调用length时就会报错
* */
function identity(arg) {
    // console.log(arg.length);// Property 'length' does not exist on type 'T'.
    return arg;
}
identity(123);
//指定T的类型
function identityArray(arg) {
    console.log(arg.length);
    return arg;
}
console.log(identityArray([1, 2, 3]));
/*
* 泛型函数identityArray，接收类型参数T和参数arg，它是个元素类型是T的数组，并返回元素类型是T的数组。
*
* 如果我们传入数字数组，将返回一个数字数组，因为此时T的的类型为number。
*
* 这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。
* */
//可以这样来啦
function identityArray2(arg) {
    console.log(arg.length);
    return arg;
}
