/*
let Dialog = (function () {
  function Dialog() {
    this.time = 3000;
  }

  Dialog.title = 'xianjs';
  Dialog.prototype.show = function () {
    console.log('show');
  };
  Dialog.prototype.hide = function () {
    console.log('hide');
  };
  exports.Dialog = Dialog;
  return module.exports;
// exports.Dialog = Dialog;
// module.exports = Dialog;
})();*/

function Dialog() {
  this.time = 3000;
}

Dialog.title = 'xianjs';
Dialog.prototype.show = function () {
  console.log('show');
};
Dialog.prototype.hide = function () {
  console.log('hide');
};
// exports.Dialog = Dialog;
module.exports = Dialog;