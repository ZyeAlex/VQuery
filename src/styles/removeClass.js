// 引入检测class模块
import hasClass from "./hasClass.js";
// 移除class
export default function(that,cls){
  if( hasClass(that,cls) ){
    that.className = that.className.split(" ").filter(v=>v!=cls).join(" ");
  }
}