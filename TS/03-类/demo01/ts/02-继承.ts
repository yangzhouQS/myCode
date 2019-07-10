// 继承
class Animal {
    /**
     * 动物的move方法
     * @param num 默认num为4
     */
    move(num: number = 4) {
        console.log(`动物有${num}条腿`);
    }
}

/**
 * Dog类继承Animal类
 */
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

let dog = new Dog();
dog.move();
dog.bark();