class Promise {
  //实例化Promise的时候传递的实参是函数
  constructor(excutorCallBack) {
    this.status = 'pending';//开始的状态
    this.value = undefined;//将来的状态
    this.fulfilledAry = [];//需要执行的方法进行保存
    this.rejectedAry = [];//失败
    let resolveFn = (result) => {//成功执行的函数
      let timerid = setTimeout(() => {
        clearTimeout(timerId);//只是为了异步操作
        //1.判断当前的状态是否为pending
        if (this.status !== 'pending') return;
        //2.改变当前的状态为成功的状态
        this.status = 'fulfilled';
        //3.修改要返回的value值
        this.value = result;
        //4.执行数组保存的方法,并且传递当前的value值
        //刚开始不可以执行方法,需要等到then方法执行完成再执行
        this.fulfilledAry.forEach(item => item(this.value));
      }, 0);
    };
    let rejectFn = (reason) => {//失败指向的函数
      let timerid = setTimeout(() => {
        clearTimeout(timerid);//只是为了异步操作
        if (this.status !== 'pending') return;
        this.status = 'fulfilled';
        this.value = reason;
        this.rejectedAry.forEach(item => item(this.value));
      }, 0);
    };

    excutorCallBack(resolveFn, rejectFn);//回调函数的执行
  }

  /**
   * 成功和失败需要执行的方法
   * @param fufilledCallBack
   * @param rejectedCallBack
   */
  then(fufilledCallBack, rejectedCallBack) {
    this.fulfilledAry.push(fufilledCallBack);
    this.rejectedAry.push(rejectedCallBack);
  }
}

module.exports = Promise;