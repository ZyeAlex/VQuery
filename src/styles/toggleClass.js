
import hasClass from './hasClass.js';
import addClass from './addClass.js';
import removeClass from './removeClass.js';

// 切换类
export default function(that,cls){
  hasClass(that,cls) ? removeClass(that,cls) : addClass(that,cls);
}