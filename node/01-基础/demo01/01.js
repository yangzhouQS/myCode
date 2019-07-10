function add() {
  console.log("add");
}

exports.add = add;
module.exports = {
  hello: "helloword",
  frieds: [1, 2, 3, 4],
  info() {
    console.log(this.hello, this.frieds);
  }
}
