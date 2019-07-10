const fs = require('fs');
const readDir = () => {
  return new Promise((resolve, rejected) => {
    fs.readdir(__dirname, (error, data) => {
      if (error) {
        rejected(error);
      } else {
        resolve(data);
      }
    });
  });
};
readDir().then((data, error) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
})

