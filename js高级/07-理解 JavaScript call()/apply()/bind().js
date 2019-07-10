// 理解 JavaScript call()/apply()/bind()

/*
var leo = {
  name: 'Leo',
  sayHi: function () {
    return "Hi! I'm " + this.name;
  }
};

var neil = {
  name: 'Neil'
};

leo.sayHi(); // "Hi! I'm Leo"
leo.sayHi.call(neil); // "Hi! I'm Neil"*/


var leo = {
  name: 'Leo',
  sayHi: function () {
    return "Hi! I'm " + this.name;
  }
};

leo.sayHi.call(null); // "Hi! I'm undefined"
















