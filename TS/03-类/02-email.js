"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email(email) {
        if (this.regEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("邮箱错误");
        }
    }
    Email.prototype.regEmail = function (email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    Email.prototype.get = function () {
        return this.email;
    };
    return Email;
}());
exports.Email = Email;
var email = new Email("5555@qq.com");
console.log(email.get());
