// @ts-ignore
function f() {
    let a = 100;
    if (true) {
        let b = 1 + a;
        return b;
    }
}

// @ts-ignore
console.log(f());
