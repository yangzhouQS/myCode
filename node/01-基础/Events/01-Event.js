/*
*
* */
let EventEmitter = require('events');
let util = require('util');

//util  是node给我们提供的工具包,可以实现继承
function Bell() {
  EventEmitter.call(this);//实现私有属性的继承
}

util.inherits(Bell, EventEmitter);//实现公有属性的继承
let bell = new Bell();

// console.log(bell);
function stuClass() {
  console.log('学生上课');
}

bell.on('响', stuClass);//监听事件
bell.emit('响');//事件触发
bell.emit('响');//事件触发

