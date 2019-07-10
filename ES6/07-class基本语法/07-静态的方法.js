class Perosn {
  static getHello() {
    console.log(this);//[Function: Perosn]
    return 'hello word';
  }
}
//静态的方法不被实例继承,直接通过类名调用静态的方法
console.log(Perosn.getHello());
let p=new Perosn();
// p.getHello();//错误,实例不会继承原型上的方法