//2018­4­4 16:26:8
// 04月04日 16时26分
function formatData(dataStr, split = ['-', ':']) {
  console.log(split);

  let tmpArr = dataStr.split(' ');
  let y, m, d, h, i, s;
  if (tmpArr.length === 2) {
    let leftArr = tmpArr[0].split(split[0]);
    let rightArr = tmpArr[1].split(split[1]);

    //年月日
    y = leftArr[0] || 1970;
    m = leftArr[1] || 1;
    d = leftArr[2] || 1;

    //时分秒
    h = rightArr[0] || 0;
    i = rightArr[1] || 0;
    s = rightArr[2] || 0;
  }
  return {
    y, m, d, h, i, s,
  };
}

let str = '2018-8-4 16:26';
let res = formatData(str);
console.log(res);
console.log(`${res.m}月${res.d}日 ${res.h}时${res.i}分${res.s}秒`);
