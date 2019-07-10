class Girl {
  constructor() {
    this._events = {};
  }

  //{click:[fn1,fn2...]}
  on(eventName, callback) {
    if (this._events[eventName]) {//当前对象存储为空
      this._events[eventName].push( callback );
    } else {
      this._events[eventName] = [callback];
    }
  }

  //执行触发
  emit(eventName, ...params) {
    if (this._events[eventName]) {
      // this._events[eventName].forEach( cb => cb.apply( this, params ) );
      this._events[eventName].forEach( cb => cb( ...params ) );
    }
  }
}

let girl = new Girl();
girl.on( '失恋', (...who) => {
  console.log( ...who, '买买' );
} );
girl.on( '失恋', (...who) => {
  console.log( ...who, '购物' );
} );
girl.on( '失恋', (...who) => {
  console.log( ...who, '吃吃' );
} );
girl.emit( '失恋', '我', '呀' );
