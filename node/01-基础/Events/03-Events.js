const EventEmitter = require("events");

class Player extends EventEmitter {

}

const player = new Player();
// on监听自定义的事件
player.on("my-event", (data) => {
  console.log(data);
});
//emit事件触发
player.emit("my-event", "node自定义事件");





