class Greeter {
    greeting: string;

    constructor(msg: string) {
        this.greeting = msg;
    }

    greet() {
        return "hello" + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter);
//Greeter { greeting: 'world' }