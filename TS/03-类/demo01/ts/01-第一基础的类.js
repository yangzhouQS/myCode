var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return "hello" + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter);
//Greeter { greeting: 'world' }
