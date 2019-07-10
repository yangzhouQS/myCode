class Promise {
  constructor(excutorCallback) {
    this.status = 'pending';//默认的状态
    this.value = undefined;//记录状态的变化
    //执行excutor
    /*
    * 成功执行的函数(resolve)
    * 每次进入执行函数式首先判断的是status的状态
    */
    let resolveFn = (result) => {
      if (this.status !== 'pending') return;
      this.status = 'fulfilled';
      this.value = result;
    };
    /*
    * 失败执行的函数：rejected()
    */
    let rejectFn = (reason) => {
      if (this.status !== 'pending') return;
      this.status = 'rejected';
      this.value = reason;
    };
    excutorCallback(resolveFn, rejectFn);
  }

  then(fulfilledCallback, rejectedCallback) {

  }
}

module.exports = Promise;
