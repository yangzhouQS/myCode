//构造函数
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log(p);

class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    // return `{x:${this.x} , y = ${this.y} }`
    return '(' + this.x + ', ' + this.y + ')';
  }
}

let p2 = new Point(3, 5);
console.log(p2.toString());
