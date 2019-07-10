class Test {
  // _n = 0

  constructor() {
    this._count = 0;
  }

  getCount() {
    //console.log('n = ', this._n);//不需要加this访问
    console.log(this._count);
  }
}

let t = new Test();
t.getCount();

class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}