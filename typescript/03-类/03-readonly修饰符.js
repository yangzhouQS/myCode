"use strict";
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let o = new Octopus('xianjs');
console.log(o.name);
// o.name='xxx';//只读属性禁止修改的
