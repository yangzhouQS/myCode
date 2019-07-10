let fs = require('fs');
let readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
const fn = async function () {
  const f1 = await readFile('./1.txt');
  const f2 = await readFile('./2.txt');
  console.log(f1.toString());
  console.log(f2.toString());
}
//内置的执行器
fn();