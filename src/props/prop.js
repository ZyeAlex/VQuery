// prop属性
function prop(that,operate){

  if(operate.length===2 && typeof operate[0]==="string"){
    // 修改属性值
    that[operate[0]]=operate[1];
  }else if(operate.length===1 && typeof operate[0]==="string"){
    // 返回属性值
    return that[operate[0]];
  }

}