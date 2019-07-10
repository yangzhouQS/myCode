class User {
  name: string;//属性

  //类的构造函数,初始化赋值
  constructor(name: string) {
    this.name = name;
  }

  //类的方法,获取name属性
  getName() {
    console.log(this.name);
  }
}

class Student extends User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    super(name);//调用父类的构造函数
    this.age = age;
  }

  //可以继承父类的getName()
  getAge() {
    console.log(this.age);
  }
}

let s: Student = new Student('李四', 26);
s.getName();
s.getAge();

/*
公共，私有与受保护的修饰符
1 - 默认为 public
在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public来做修饰；例如，C#要求必须明确地使用 public指定成员是可见的。 在TypeScript里，成员都默认为 public

2 - 理解 private
当成员被标记成 private时，它就不能在声明它的类的外部访问。

3 - 理解 protected
protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。

4 - readonly修饰符
你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

*
* */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");


/*

5 - 参数属性
在上面的例子中，我们必须在Octopus类里定义一个只读成员 name和一个参数为 theName的构造函数，并且立刻将 theName的值赋给 name，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 Octopus类的修改版，使用了参数属性：
*/

class Octopus2 {
  readonly numberOfLegs: number = 8;

  constructor(readonly name: string) {
  }
}

/*
注意看我们是如何舍弃了 theName，仅在构造函数里使用 readonly name: string参数来创建和初始化 name成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样。
* */

/*
* 6 - 存取器
TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
* */

let passcode = 'code';

// @ts-ignore
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (passcode && passcode == "code") {
      this._fullName = newName;
    }
    else {
      console.log("Error: 用户密码不正确");
    }
  }
}

// @ts-ignore
let employee: Employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
  console.log((employee.fullName));
}

/*
* 7 - 静态属性
到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 static定义 origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 origin前面加上类名。 如同在实例属性上使用 this.前缀来访问属性一样，这里我们使用 Grid.来访问静态属性。
* */

class Grid {
  static origin = {x: 0, y: 0};

  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));




















