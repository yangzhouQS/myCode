/*
下面来创建第一个使用泛型的例子：identity函数。 这个函数会返回任何传入它的值。 你可以把这个函数当成是echo命令。

不用泛型的话，这个函数可能是下面这样：

*/
function identity(arg: number): number {
  return arg;
}

console.log(identity(100));


// 或者，我们使用any类型来定义函数：

function identity2(arg: any): any {
  return arg;
}

console.log(identity2(100));

/*

使用any类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。 如果我们传入一个数字，我们只知道任何类型的值都有可能被返回。

因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。
*/
function identity4<T>(arg: T): T {
  return arg;
}

/*
我们给identity添加了类型变量T。 T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 之后我们再次使用了T当做返回值类型。现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。
*/