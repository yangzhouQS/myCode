"use strict";

var _createClass = function() {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	return function(Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);
		if (staticProps) defineProperties(Constructor, staticProps);
		return Constructor;
	};
}();

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}
	return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}
	subClass.prototype = Object.create(superClass && superClass.prototype, {
		constructor: {
			value: subClass,
			enumerable: false,
			writable: true,
			configurable: true
		}
	});
	if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(function(x) {
	return x * x;
}));

var Animat = function() {
	function Animat(name, age) {
		_classCallCheck(this, Animat);

		this.name = name;
		this.age = age;
	}

	_createClass(Animat, [{
		key: "sayName",
		value: function sayName() {
			return this.name + " - " + this.age;
		}
	}]);

	return Animat;
}();

var Dog = function(_Animat) {
	_inherits(Dog, _Animat);

	function Dog(name, age, sex) {
		_classCallCheck(this, Dog);

		var _this = _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name, age));

		_this.sex = sex;
		return _this;
	}

	_createClass(Dog, [{
		key: "sayHello",
		value: function sayHello() {
			console.log(this.name, this.age, this.sex);
		}
	}]);

	return Dog;
}(Animat);

var d = new Dog("阿黄", 26, 'xy');
d.sayHello();
d.sayName();
