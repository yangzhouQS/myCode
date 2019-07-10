"use strict";
//静态属性和静态方法
class Grid {
    //静态方法,无须实例化类就可以调用的方法
    static getColor() {
        //访问静态的属性,在静态方法中国不可以使用this
        console.log(Grid.Color);
    }
}
//静态属性
Grid.Color = { 'a': 'Red', 'b': 'Green', 'c': 'Black' };
Grid.getColor();
console.log(Grid.Color); //{ a: 'Red', b: 'Green', c: 'Black' }
