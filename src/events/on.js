
import err from '../err'

export default function(that,operate,prevObject){
  // 新建V对象
  let toThat = new V.prototype.v(that,prevObject),
      obj = {},
      ope = null,
      fn = null;

  if( operate.length == 1 && operate[0].constructor === Object ){

    // 参数是字符串
    obj = operate[0]

    for(let k in obj){

      that.addEventListener(k, obj[k].bind(toThat))

    }

  }else if( operate.length == 2 && typeof operate[0] === "string" && typeof operate[1] === "function" ){

    // 第一个参数是操作
    ope = operate[0]
    // 第二个参数是回调函数
    fn = operate[1]

    that.addEventListener(ope, fn.bind(toThat))

  }else{ 

    throw new Error(`
    您的on方法使用错误,
    ${err.arg}`)
    
  }
}