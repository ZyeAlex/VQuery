
export default function css(that,operate){

  if(operate.length===1){
    // 返回该属性
    if(typeof operate[0]==="string"){
      return getComputedStyle(that)[operate[0]]
    }
    // 对象赋值
    if( typeof operate[0] === "object" && operate[0] !== null ){
      for(let i in operate[0]){
        that.style[i] = operate[0][i]
      }
    }
  }else if(operate.length===2){
    // 设置属性值
    if(typeof operate[0]==="string" && ( typeof operate[1]==="string" || typeof operate[1]==="number") ){
      that.style[operate[0]] = operate[1]
    }
  }

}