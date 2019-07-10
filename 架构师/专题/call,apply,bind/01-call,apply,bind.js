/*
* apply.call.bind 都是为了改变函数运行时上下文(this指向)而存在的。
* */
const hero = {
  name: '刘备',
  getName() {
    console.log('英雄的名称 : name = ', this.name);
  }
};
const hero2 = {
  name: '小乔'
}
hero.getName();//英雄的名称 : name =  刘备


hero.getName.call(hero2);
hero.getName.apply(hero2);
hero.getName.bind(hero2)();//英雄的名称 : name =  小乔

/*
三兄弟的区别.
  三兄弟接收的第一个参数都是 要绑定的this指向.
  apply的第二个参数是一个参数数组
  call和bind的第二个及之后的参数作为函数实参按顺序传入。
  bind不会立即调用,其他两个会立即调用。
*/

let skill = {
  getSkill(...args) {
    console.log(this.name, 'skill => ', args);
  }
};
const hero3 = {
  name: '小乔'
}
skill.getSkill.call(hero3, '麻将', '三缺一');
skill.getSkill.apply(hero3, ['麻将', '三缺一']);//小乔 skill =>  [ '麻将', '三缺一' ]

skill.getSkill.bind(hero3, 1, 2, 3)('麻将', '三缺一');//[ 1, 2, 3, '麻将', '三缺一' ]



