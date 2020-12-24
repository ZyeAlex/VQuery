// node遍历
import node from '../iterator/node.js';
// prop
import prop from './prop.js';
// 属性
export default {
  prop(...operate){
    let toThat = this;
    node( this, (that) => toThat = prop(that,operate) || toThat );
    return toThat;
  }
}