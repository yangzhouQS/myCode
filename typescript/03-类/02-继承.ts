class Person {
  public username: string;
  public userage: number;
  public gender: string;

  //构造函数,创建对象时及进行实例的初始化
  constructor(username: string, userage: number, gender: string) {
    this.username = username;
    this.userage = userage;
    this.gender = gender;
  }

  toString() {
    return `username = ${this.username} age = ${this.userage} gender = ${this.gender}`
  }
}

class Student extends Person {
  public username: string;
  public userage: number;
  public gender: string;
  private _numid: string;

  constructor(username: string, userage: number, gender: string, numid: string) {
    super(username, userage, gender);
    this.username = username;
    this.userage = userage;
    this.gender = gender;
    this._numid = numid;
  }


  get numid(): string {
    return this._numid;
  }

  set numid(value: string) {
    this._numid = value;
  }

//重写父类的toString()方法
  toString(): string {
    //调用父类的返回结果
    return `numid = ${this._numid}\t` + super.toString();
  }
}

let stu: Student = new Student('小明', 15, '男', 'A001');
// console.log(stu.toString());
stu.numid = 'BA1001';//私有属性的修改需要通过类内部提供的set方法
console.log(stu.numid);
