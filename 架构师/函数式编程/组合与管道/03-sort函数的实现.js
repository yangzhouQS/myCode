let people = [
  {'firstName': "ddName", "lastName": "ccName"},
  {'firstName': "ccName", "lastName": "aaName"},
  {'firstName': "bbName", "lastName": "ddName"},
  {'firstName': "aaName", "lastName": "bbName"}
];

//按照firstName进行排序
/**
 * 当sort函数不传递回调函数的时候,内部默认是按照字符串Unicode编码的顺序进行排序的
 * @type {*[]}
 */
let result = people.sort((a, b) => {
  return (a.firstName < b.firstName) ? -1 : (a.firstName > b.firstName) ? 1 : 0;
});
//按照lastName进行排序
result = people.sort((a, b) => {
  return (a.lastName < b.lastName) ? -1 : (a.lastName > b.lastName) ? 1 : 0;
});
// console.log(result);
/**
 * sort:对给定对象的属性进行排序
 * @param property
 * @returns {function(*, *): number}
 */
const sotBy = (property) => {
  return (a, b) => {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result;
  }
};
console.log(people.sort(sotBy('firstName')));
console.log(people.sort(sotBy('lastName')));