async function getData() {
  // return '学生成绩';
  console.log(1);
  await (setTimeout(() => {
    console.log('arguments');
  }, 2000));
}

let p = getData();
p.then(data => {

  // console.log(data);
}).catch(error => {
  console.log(error);
});
