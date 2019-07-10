// @ts-ignore
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distanceInMeters: number = 4) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        // @ts-ignore
        super(name);
    }

    /**
     * 重写父类的方法
     * @param distanceInMeters
     */
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);//执行父类的方法
    }
}

class Horse extends Animal {
    constructor(name: string) {
        // @ts-ignore
        super(name);
    }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("学习Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
/*
Slithering...
学习Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
*/