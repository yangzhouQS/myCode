setInterval(function () {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let str = `${h.toString().padStart(2, 0)}:`;
  str+=`${m.toString().padStart(2, 0)}:`;
  str+=`${s.toString().padStart(2, 0)}`;
  console.log(str);
}, 1000);

