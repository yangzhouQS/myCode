function identity<T>(arg: T): T {
  return arg;
}

//1 - 第一种是，传入所有的参数，包含类型参数：
console.log(identity<string>("myString"));
//这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。
//2 -  第二种方法更普遍。利用了类型推论 – 即编译器会根据传入的参数自动地帮助我们确定T的类型：
console.log(identity("myString"));
//自动类型的推导
console.log(identity<number>(132231));

