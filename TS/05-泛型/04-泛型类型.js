// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
function identity(arg) {
    return arg;
}
// @ts-ignore
var identity2 = identity;
// 我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以。
function identity(arg) {
    return arg;
}
var myIdentity = identity;
// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
function identity(arg) {
    return arg;
}
var myIdentity2 = identity;
function identity(arg) {
    return arg;
}
// @ts-ignore
var myIdentity4 = identity;
function identity(arg) {
    return arg;
}
var myIdentity3 = identity;
// 注意，我们的示例做了少许改动。 不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分。 当我们使用GenericIdentityFn的时候，还得传入一个类型参数来指定泛型类型（这里是：number），锁定了之后代码里使用的类型。 对于描述哪部分类型属于泛型部分来说，理解何时把参数放在调用签名里和何时放在接口上是很有帮助的。
// 除了泛型接口，我们还可以创建泛型类。 注意，无法创建泛型枚举和泛型命名空间。
