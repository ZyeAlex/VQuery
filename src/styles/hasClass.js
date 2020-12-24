// 检测是否有class模块
export default function hasClass(that,cls){
  if(!that.className) return false;
  return that.className.indexOf(cls) >-1 ? true : false;
}