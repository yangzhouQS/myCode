//arr.sort(function(a,b){ return Math.random()>.5 ? -1 : 1;}); 

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.sort((a, b) => Math.random() > 0.5 ? -1 : 1);

if (!Array.prototype.shuffle) {
  Array.prototype.shuffle = function () {
    for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x) ;
    return this;
  };
}
arr.shuffle();


//（1）时间复杂度约为 O(n2)，splice()方法会遍历一次
function shuffle(a) {
  var b = [];
  while (a.length > 0) {
    var index = parseInt(Math.random() * (a.length - 1));
    b.push(a[index]);
    a.splice(index, 1);
  }
  return b;
}

//（2）时间复杂度为 O(n)
function shuffle2(a) {
  var len = a.length;
  for (var i = 0; i < len - 1; i++) {
    var index = parseInt(Math.random() * (len - i));
    var temp = a[index];
    a[index] = a[len - i - 1];
    a[len - i - 1] = temp;
  }
}

arr = [1, 3, 5, 7, 9, 1, 3, 5];





