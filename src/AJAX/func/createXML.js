// 创建XML对象
export default function(){
  return window.XMLHttpRequest ?
   new XMLHttpRequest() : 
   new ActiveXObject("Microsoft.XMLHttp")
}