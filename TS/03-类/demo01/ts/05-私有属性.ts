// @ts-ignore
class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends Animal {
    constructor() {
        // @ts-ignore
        super("Rhino");
    }
}

class Employee {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

// @ts-ignore
let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
console.log(animal);
console.log(rhino);
console.log(employee);
/*
Animal { name: 'Goat' }
Rhino { name: 'Rhino' }
Employee { name: 'Bob' }
*/
animal = rhino;
animal = employee;