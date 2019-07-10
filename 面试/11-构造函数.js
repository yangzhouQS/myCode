function Foo(name, age) {
  this.name = name;
  this.age = age;
  this.class = "Class-1";
  return this;//默认是有这样的语法的哦
}

var f = new Foo('Tom', 22);

