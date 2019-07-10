var name = 'window';
var Tom = {
  name: 'Tom',
  show: function () {
    console.log(this.name);
  },
  wait: function () {
    var fn = this.show;
    fn();
  }
};
Tom.wait();

