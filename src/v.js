
// 初始化v对象      元素  上一个对象
export default function v(select,context){

  // 压栈
  // 将context对象存入栈结构
  if (context){
    this.prevObject = new V.fn.v(context)
  }

  // 如果未传入元素，返回一个空的v对象
  if (select === undefined || select === null){ 
    this.length = 0
    return this
  }

  // 判定参数为选择器
  if (typeof select === "string"){
    if(!select) throw new Error(err().arg)
    let ele = context.querySelectorAll(select)
    ele.forEach( (v,i) => this[i] = v )
    this.length = ele.length
  }
  // 判定参数为节点
  else if(select.nodeType){
    this[0] = select
    this.length = 1
  }

  // 判定参数为节点集合
  else if(select.constructor === NodeList){
    for(let v = 0; v<select.length; v++){
      this[v] = select[v]
    }
    this.length = select.length
  }

  // 判断是否为V对象
  else if(select.constructor === V){
    return select
  }
  // 如果参数为函数，则添加DOMContentLoaded
  else if(select.constructor === Function){
    document.addEventListener(`DOMContentLoaded`,fn)
    return {}
  }

  return this

};