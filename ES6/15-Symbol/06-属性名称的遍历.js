const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';
console.log(Object.getOwnPropertySymbols(obj));
//[ Symbol(a), Symbol(b) ]

let obj2 = {
  [Symbol('my_key')]: 1,
  enum: 2,
  nonEnum: 3
};

console.log(Reflect.ownKeys(obj2));
//[ 'enum', 'nonEnum', Symbol(my_key) ]