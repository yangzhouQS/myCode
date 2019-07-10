function fn() {
  "use strict"
  console.log(this);//undefined
  console.log(this == undefined);//true
}

fn();

