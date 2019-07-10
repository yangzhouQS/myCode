class User {
  public username: string;//属性
  public userage: number;//公开的属性
  protected money: number;//可以继承属性,可以在内部访问的属性
  private count: number;//私有的属性,无法继承的属性,可以在内部访问的属性

  //构造函数
  constructor(username: string, userage: number, money: number, count: number) {
    this.username = username;
    this.userage = userage;
    this.money = money;
    this.count = count;
  }
}
//创建User类的实例
let p: User = new User('李四', 20, 666, 10);
//通过实例访问私有的属性和受保护的属性时不可以的
// console.log(p.username, p.userage, p.money);
console.log(p.username, p.userage);