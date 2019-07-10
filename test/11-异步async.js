async function fn() {
  console.log("start");
  await setTimeout(() => {
    console.log("2s");
    console.log(new Date().getTime());
  }, 2000);
  console.log("a");
  await setTimeout(() => {
    console.log("1s");
    console.log(new Date().getTime());
  }, 1000);
  console.log("end");
}

fn();
