var orig_setTimeout = window.setTimeout;
window.setTimeout = function (fun, wait) {
  if (wait < 15) {
    orig_setTimeout(fun, wait);
  } else {
    var img = new Image();
    img.onload = img.onerror = function () {
      fun();
    };
    img.src = "data:,foo";
  }
};

