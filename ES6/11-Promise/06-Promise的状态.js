/*
* 用 new Promise  实例化的promise对象有以下三个状态。
"has-resolution" - Fulfilled
      resolve(成功)时。此时会调用  onFulfilled
"has-rejection" - Rejected
      reject(失败)时。此时会调用  onRejected
"unresolved" - Pending
      既不是resolve也不是reject的状态。也就是promise对象刚被创建后的初始化状态等
* */
/*
promise对象的状态，从Pending转换为Fulfilled或Rejected之后， 这个promise对象的状态就不会再发生任何变化。
也就是说，Promise与Event等不同，在.then  后执行的函数可以肯定地说只会被调用一次。
另外，Fulfilled和Rejected这两个中的任一状态都可以表示为Settled(不变的)。
Settled
    resolve(成功) 或 reject(失败)。
从Pending和Settled的对称关系来看，Promise状态的种类/迁移是非常简单易懂的。当promise的对象状态发生变化时，用 .then  来定义只会被调用一次的函数。
*/
