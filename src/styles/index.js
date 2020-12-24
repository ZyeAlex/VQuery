
// css属性
import css from './css'
// 检查类
import hasClass from './hasClass'
// 添加类
import addClass from './addClass'
// 删除类
import removeClass from './removeClass'
// 切换类
import toggleClass from './toggleClass'
// node迭代
import node from '../iterator/node'

export default {
  // css操作
  css(...operate){
    let toThat = this
    node( this, that => toThat = css(that,operate) || toThat )
    return toThat
  },
  // 检查class
  hasClass(cls){
    let toThat = null
    cls && node( this, that => toThat = hasClass(that,cls) )
    return toThat
  }, 
  // class操作
  addClass(cls){
    cls && node( this, that => addClass(that,cls) )
    return this
  },
  // 移除class
  removeClass(cls){
    cls && node( this, that => removeClass(that,cls) )
    return this
  },
  // 切换类
  toogleClass(cls){
    cls && node( this, that => toggleClass(that,cls) )
    return this
  }
}