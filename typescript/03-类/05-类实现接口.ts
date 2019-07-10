interface Person {
  name: string;
  age: number;
  gender: string;
  money: number;
  address: string;
  numid: string;
}

//类实现接口
class Stu implements Person {
  address: string;
  age: number;
  gender: string;
  money: number;
  name: string;
  numid: string;
  userage: number;
  username: string;

  constructor(address: string, age: number, gender: string, money: number, name: string, numid: string, userage: number, username: string) {
    this.address = address;
    this.age = age;
    this.gender = gender;
    this.money = money;
    this.name = name;
    this.numid = numid;
    this.userage = userage;
    this.username = username;
  }
}

export default Person;