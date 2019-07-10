function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
}
var m = new MathHandle(1, 3);
console.log(m.add());

class MathHandle2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }
}

let m2 = new MathHandle2(1, 3);
console.log(m2.add());

console.log(typeof MathHandle2);//function
console.log(MathHandle2 === MathHandle2.prototype.constructor);//true