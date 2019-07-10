export class Email {
  private email;

  constructor(email: string) {
    if (this.regEmail(email)) {
      this.email = email;
    } else {
      throw new Error("邮箱错误");
    }
  }

  private regEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  get(): string {
    return this.email;
  }
}

let email = new Email("5555@qq.com");
console.log(email.get());
