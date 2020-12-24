

// 异步回调函数
export default class {
  constructor(fn){
      // 初始状态
    this.state = "init"
    // 成功的值
    this.value = null
    // 失败的值
    this.reason = null
    // 成功缓存
    this.trueQueue = null
    // 失败缓存
    this.falseQueue = null

    // 成功执行
    const resolve = value => {
      // 如果promise状态为初始状态，则改变其状态为成功
      if( this.state === "init" ){
        this.state = "success"
        this.value = value
      }
      // 如果当前成功缓存内有未执行函数，则将其执行
      if(this.trueQueue){
        this.trueQueue()
      }
    }
    // 失败执行
    const reject = reason => {
      // 如果promise状态为初始状态，则改变其状态为失败
      if( this.state ===　"init" ){
        this.state = "defult"
        this.reason = reason
      }
      // 如果当前失败缓存内有未执行函数，则将其执行
      if(this.falseQueue){
        this.falseQueue()
      }
    }
    // 执行函数
    try{
      fn(resolve,reject)
    }catch(error){
      // 如果执行函数失败，则抛出错误
      reject(error)
    }
  }
  then(trueFn,falseFn){
    function execute(value,resolve,reject){
      if( value && value.constructor === promise ){
        value.then( value => resolve = value, reason => reject = reason )
      }else{
        resolve = value
      }
    };
    // then方法直接返回一个新的promise对象
    // 新的promise对象需要执行resolve或者reject函数
    // resolve和reject函数的参数值来自上一个promise对象接收的值
    // 将上一个对象resolve和reject接收的值赋值给新的对象
    return new promise((resolve,reject)=>{
      // 当then执行时，状态为初始状态
      if(this.state === "init"){
        if(trueFn){
          // 将trueFn及形参保存进成功缓存等待执行
          this.trueQueue = ()=>{ execute( trueFn(this.value), resolve, reject )}
        }
        if(falseFn){
          // 将falseFn及形参保存进失败缓存等待执行
          this.falseQueue = ()=>{ execute( falseFn(this.reason), resolve, reject )}
        }
      }
  
      // 当then执行时，状态为成功状态
      else if(this.state === "success"){
        if(trueFn){
          // 执行成功函数，并将接收到的值赋值给resolve
          execute( trueFn(this.value), resolve, reject )
        }
      }
      
      // 当then执行时，状态为失败状态
      else if(this.state === "defult"){
        if(falseFn){
          // 执行失败的函数，并将失败的值赋给reject
          execute( falseFn(this.reason), resolve, reject )
        }
      }
    })
  }
  catch(falseFn){
    return this.then(null,falseFn)
  }
}
