console.log(/\d+/.exec("12 ax 456"));//返回的是第一次匹配到的,匹配到后停止匹配
//[ '12', index: 0, input: '12 ax 456', groups: undefined ]
console.log(/\d+/g.exec("88 ax 456"));
//[ '88', index: 0, input: '88 ax 456', groups: undefined ]

console.log("123 abc 456".match(/\d+/));//匹配一次//[ '123', index: 0, input: '123 abc 456', groups: undefined ]
console.log("123 abc 456".match(/\d+/g));//全局匹配 //[ '123', '456' ]

