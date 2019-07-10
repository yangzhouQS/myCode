///<reference path="03-继承2.ts"/>
// @ts-ignore
class Animal {
    public name: string;
    private money = 100;

    public constructor(name: string) {
        this.name = name;
    }

    public say(dis: number = 4) {
        console.log(`动物有${dis}条腿`);
    }
}

// @ts-ignore
class Dog extends Animal {
    public constructor(name: string) {
        // @ts-ignore
        super(name);
    }

    public print() {
        // console.log(this.money);
        console.log(this.name);
    }

    name(name: any): any {
        throw new Error("Method not implemented.");
    }
}

let d: Dog;
// @ts-ignore
d = new Dog("小黑");
console.log(d);
// @ts-ignore
d.print();


