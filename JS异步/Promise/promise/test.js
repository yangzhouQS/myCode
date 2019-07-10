let Promise = require('./Promise');
new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve(100) : reject(-100);
  },500)
}).then(data => {
  console.log(data);
}, error => {
  console.log(error);
});