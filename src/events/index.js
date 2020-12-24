
// on事件
import on from './on'
import node from '../iterator/node'

// event事件
export default {

  on(...operate){
    const prevObject = this
    // 遍历节点，绑定事件
    node(this,that=>on(that,operate,prevObject))
    return this
    
  },
  
  click(fn){ 
    return this.on(`click`,fn)
  },

  mouseenter(fn){ 
    return this.on(`mouseenter`,fn)
  },

  mouseleave(fn){ 
    return this.on(`mouseleave`,fn)
  },

  mouseover(fn){ 
    return this.on(`mouseover`,fn)
  },

  mouseout(fn){ 
    return this.on(`mouseout`,fn)
  },
  
  mousemove(fn){ 
    return this.on(`mousemove`,fn)
  }
}