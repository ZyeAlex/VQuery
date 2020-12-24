// 将值转换为用于提交的字符串
export default function(value){
  // 如果传入字符串，则返回字符串
  if( typeof value === "string" ){ 
    return value
  };
  // 如果对象为空，返回空字符串
  if( !Object.keys(value).length ) {
    return ""
  };
  let str = ""
  for( const key in value ){
    str += key + "=" + value[key] + "&"
  }
  return str.slice(0,str.length-1)
}