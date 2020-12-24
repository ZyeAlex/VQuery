// select类型判断 以数组形式传输
export default function(hasntCheck,select){ 

  // 防止未传参
  if ( !select ){
    return
  }

  let hasChecked

  // 判断是否为字符串

  if ( typeof select === "string" ){
    // 判断选择对象
    hasChecked = hasntCheck.filter( v => [...v.parentNode.querySelectorAll(select)].some( u => u === v ) )
  }

  // 返回对象数组
  return hasChecked
}