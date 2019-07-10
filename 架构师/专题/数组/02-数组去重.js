/*==数组去重==*/
var ary = [1, 2, 3, 2, 2, 3, 4, 3, 4, 5, '3'];

/*--解决方案一--*/

/*
 * 1.依次拿出数组中的每一项（排除最后一项：最后一项后面没有需要比较的内容）
 * 2.和当前拿出项后面的每一项依次比较
 * 3.如果发现有重复的，我们把找到的这个重复项在原有数组中删除掉（splice）
 */
function uniq2(ary) {
  for (var i = 0; i < ary.length - 1; i++) {
    var item = ary[i];
    for (var k = i + 1; k < ary.length; k++) {
      if (item === ary[k]) {
        ary.splice(k, 1);//=>删除后不能让k累加了
        k--;//=>删除后先减减，在加加的时候相当于没加没减
      }
    }
  }
}

//=>i<ary.length-1：不用拿最后一项
// uniq2(ary);

function uniq(ary) {
  let obj = {};
  for (let i = 0, len = ary.length; i < len; i++) {
    let cur = ary[i];
    if (typeof obj[cur] !== 'undefined') {
      ary[i] = ary[ary.length - 1];
      ary.length--;
      i--;
      continue;
    }
    obj[cur] = cur;
  }
  obj = null;
}

let a = [1, 2, 3, '1', '2', 1, 2, 3];
console.log([...new Set(a)]);
