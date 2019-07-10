const fs = require('fs');
fs.readFile("./index.txt", (error, data) => {
  if (error) throw error;
  console.log(data.toString());
});
