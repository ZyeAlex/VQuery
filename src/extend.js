
// 添加继承
// 用于给V对象或者构造函数v初始化后的对象添加方法
export default function(object){
  for(const k in object){
    this[k]=object[k]
  }
}