# MVVM实现

## Object.defineProperty()
`Object 构造函数创建一个对象包装器。`

### 描述
```
Object 构造函数为给定值创建一个对象包装器。如果给定值是 null 或 undefined，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。

当以非构造函数形式被调用时，Object 等同于 new Object()。
```

### Object 构造函数的方法

```
Object.assign()
通过复制一个或多个对象来创建一个新的对象。

Object.create()
使用指定的原型对象和属性创建一个新对象。

Object.defineProperty()
给对象添加一个属性并指定该属性的配置。

Object.defineProperties()
给对象添加多个属性并分别指定它们的配置。

Object.entries()
返回给定对象自身可枚举属性的 [key, value] 数组。

Object.freeze()
冻结对象：其他代码不能删除或更改任何属性。

Object.getOwnPropertyDescriptor()
返回对象指定的属性配置。

Object.getOwnPropertyNames()
返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。

Object.getOwnPropertySymbols()
返回一个数组，它包含了指定对象自身所有的符号属性。

Object.getPrototypeOf()
返回指定对象的原型对象。

Object.is()
比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。

Object.isExtensible()
判断对象是否可扩展。

Object.isFrozen()
判断对象是否已经冻结。

Object.isSealed()
判断对象是否已经密封。

Object.keys()
返回一个包含所有给定对象自身可枚举属性名称的数组。

Object.preventExtensions()
防止对象的任何扩展。

Object.seal()
防止其他代码删除对象的属性。

Object.setPrototypeOf()
设置对象的原型（即内部 [[Prototype]] 属性）。

Object.values()
返回给定对象自身可枚举值的数组。
```


| 属性         | 默认值    | 说明                                                      |
| :----------- | :-------- | :-------------------------------------------------------- |
| configurable | false     | 描述属性是否可以被删除，默认为 false                      |
| enumerable   | false     | 描述属性是否可以被for...in或Object.keys枚举，默认为 false |
| writable     | false     | 描述属性是否可以修改，默认为 false                        |
| get          | undefined | 当访问属性时触发该方法，默认为undefined                   |
| set          | undefined | 当属性被修改时触发该方法，默认为undefined                 |
| value        | undefined | 属性值，默认为undefined                                   |





