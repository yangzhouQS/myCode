// @ts-ignore
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        // @ts-ignore
        if (Person.regEmail(email)) {
            this.email = email;
        }
        else {
            console.log(("error Email"));
        }
    }
    Person.regEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    Person.prototype.info = function () {
        console.log(this.name, this.age, this.email);
    };
    return Person;
}());
var p = new Person("Tom", 26, "2638@qq.com");
p.info(); //Tom 26 2638@qq.com
