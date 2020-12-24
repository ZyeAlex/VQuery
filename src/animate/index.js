import node from '../iterator/node'
import hide from './hide'
import show from './show'
import toggle from './toggle'
import slideUp from './slideUp'
import slideDown from './slideDown'
import slideToggle from './slideToggle'
import fadeOut from './fadeOut'
import fadeIn from './fadeIn'
import fadeToggle from './fadeToggle'
import animate from './animate'

export default {

  // 隐藏
  hide(...operate){
    node(this,that=>hide(that,...operate))
    return this
  },
  // 显示
  show(...operate){
    node(this,that=>show(that,...operate))
    return this
  },
  toggle(...operate){
    node(this,that=>toggle(that,...operate))
    return this
  },

  // 收起
  slideUp(...operate){
    node(this,that=>slideUp(that,...operate))
    return this
  },
  // 放下
  slideDown(...operate){
    node(this,that=>slideDown(that,...operate))
    return this
  },
  // 切换
  slideToggle(...operate){
    node(this,that=>slideToggle(that,...operate))
    return this
  },

  // 淡出
  fadeOut(...operate){
    node(this,that=>fadeOut(that,...operate))
    return this
  },
  // 淡入
  fadeIn(...operate){
    node(this,that=>fadeIn(that,...operate))
    return this
  },
  // 切换
  fadeToggle(...operate){
    node(this,that=>fadeToggle(that,...operate))
    return this
  },

  // 自定义动画
  animate(obj,...operate){
    node(this,that=>animate(that,obj,...operate))
    return this
  }
}