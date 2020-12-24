import node from "../iterator/node"
import check from './func/check'
import getBorther from './func/getBorder'
import getChildren from './func/getchildren'
import getParent from './func/getParent'
import odevity from './func/odevity'

export default {

  eq(num){

    let that = new V.fn.v(null,this)

    if ( num !== undefined ){
      that[0] = this[ +num + ( num >= 0 ? num < this.length ? 0 : -this.length : this.length ) ]
      that.length = 1
      return that
    }else{
      return this
    }

  },
  index(){
    
  },
  // 首个元素
  first(){ 
    return this.eq(0)
  },

  // 末个元素
  last(){ 
    return this.eq(-1)
  },

  // 偶数
  even(){ 
    return odevity(this)
  },

  // 奇数
  odd(){ 
    return odevity(this,true)
  },
     
  // 子元素
  children(select){

    let nodes = []
    let that = new V.fn.v(null,this)
    // 将所有子元素存进缓存
    node( this, that => nodes = nodes.concat( getChildren( that, select, false )) )

    // 筛选节点
    if ( select ){ 
      nodes = check( nodes, select )
    }

    nodes.forEach( (v,i) => that[i] = v )
    that.length = nodes.length
    return that

  },

  // 后代元素
  find(select){
    let nodes = []
    let that = new V.fn.v( null, this )

    // 将所有子元素存进缓存
    node( this, (that) => nodes = getChildren( that, select, true ) )

    // 筛选节点
    if ( select ){ 
      nodes = check(nodes,select)
    }

    nodes.forEach( (v,i) => that[i] = v )
    that.length = nodes.length
    return that

  },

  // 父级元素
  parent(){
    let toThat = new V.fn.v( null, this )
    // 将所有子元素存进缓存
    node( this, (that) => {
      let val
      if( val = getParent(that)[0] ){
        toThat[toThat.length] = val
        toThat.length++
      }
    });
    return toThat
  },

  // 祖先元素
  parents(){
    let toThat = new V.fn.v(null,this)
    node(this,(that)=>{
      let val = []
      if( val = getParent(that,true)){
        val.forEach((v,i)=>{
          toThat[i]=v
        })
        toThat.length = val.length
      }
      
    })
    return toThat
  },

  //排己
  siblings(select){

    let nodes = []
    let that = new V.fn.v( null, this )

    // 获取所有同级节点
    node( this, that => nodes = getChildren(that.parentNode,select) )
    // 过滤
    for( let v of this ){
      nodes = nodes.filter( u => u != v )
    }

    // 将所有节点写入对象
    nodes.forEach( (v,i) => that[i] = v )

    that.length = nodes.length

    // 返回siblings对象
    return that

  },

  // 找兄
  prev(recursion){
    let toThat = new V.fn.v(null,this)
    node(this,(that) => {
      let theNode = getBorther(that,false,recursion)
      theNode.forEach((v,i)=>{
        toThat[i] = v
      })
      toThat.length = theNode.length
    })
    return toThat
  },
  prevAll(){
    return this.prev(true)
  },

  // 找弟
  next(recursion){
    let toThat = new V.fn.v(null,this)
    node(this,(that) => {
      let theNode = getBorther(that,true,recursion)
      theNode.forEach((v,i)=>{
        toThat[i]=v
      })
      toThat.length = theNode.length
    })
    return toThat
  },
  nextAll(){
    return this.next(true)
  },

  is(){},

  // 出栈
  end(){ return this.prevObject; }

}