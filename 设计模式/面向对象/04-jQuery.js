class jQuery {
  constructor(selector) {
    let slice = [].slice;
    let dpm = slice.call(document.querySelectorAll(selector));
    let len = dom ? dom.length : 0;
    for (var i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || '';
  }

  append() {
  }

  addClass() {
  }

  html() {
  }
}

//暴露到全局去
window.$ = function (selector) {
  return new jQuery(selector);
}
