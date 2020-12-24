// 引入检测class模块
import hasClass from "./hasClass.js";
// 导出addclass模块
export default function addClass(that,cls){
  if( that.className ){
    if( hasClass(that,cls) ) return;
    that.className += " " + cls;
  }else{
    that.className = cls;
  }
}