const map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
console.log(map[Symbol.iterator] === map.entries);//true
console.log([...map]);//[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
console.log([...map.keys()]);//[ 1, 2, 3 ]
console.log([...map.values()]);//[ 'one', 'two', 'three' ]
console.log([...map.entries()]);//[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]





