var big = '万达老师';

var obj = {
  big: '宋伟老师',
  showBig: function () {
    return this.big;
  }
};
obj.showBig.call(big);