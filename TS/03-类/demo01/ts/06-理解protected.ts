class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// @ts-ignore
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

// @ts-ignore
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
// Hello, my name is Howard and I work in Sales.
//     Howard