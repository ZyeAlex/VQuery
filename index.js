
import v from './src/v'
import extend from './src/extend'

import events from './src/events/index'
import styles from './src/styles/index'
import props from './src/props/index'
import vals from './src/vals/index'
import nodes from './src/nodes/index'

import animate from './src/animate/index'
import canvas from './src/canvas/index'

import ajax from './src/AJAX/index'
import cookie from './src/cookie/index'

// V函数
"use strict"

const version = "0.1.3"

// 将V函数绑定为window方法
window._ = window.$ = window.V = V

// V函数
function V( select, context = window.document ){
  // 初始化v对象     CSS选择器 压栈document对象
  return new V.fn.v( select, context )
}
  
// 重写V函数的原型对象并命名为 fn 对象
V.fn = V.prototype = {

  // 将原型的constructor绑定构造函数V
  constructor: V, 

  // iterator迭代器
  //根据V对象的length属性迭代dom元素
  [Symbol.iterator](){
    let i = 0;
    return {
      next:()=>{
        return {
          value:this[i],
          done:i++ === this.length
        }
      }
    }
  }

};

// 初始化v对象
V.fn.v = v

// 将构造函数v的原型对象改变为V的原型对象fn
V.fn.v.prototype = V.fn

// extend继承

V.extend = V.fn.extend = extend

// 遍历
let arr = [],
    each = arr.forEach,
    filter = arr.filter
V.fn.forEach = V.fn.each = function(fn){
  each.call(this,fn)
}
V.forEach = V.each = function(gather,fn){ 
  each.call(gather,fn)
}
V.fn.filter = function(fn){
  filter.call(this,fn)
}
V.filter = function(gather,fn){
  filter.call(gather,fn)
}

// 绑定事件
V.fn.extend(events)

// 样式操作
V.fn.extend(styles)

// 属性操作
V.fn.extend(props)

// 内容操作
V.fn.extend(vals)

// 节点操作
V.fn.extend(nodes)

// 动画效果
V.fn.extend(animate)

// canvas效果
V.extend(canvas)
V.fn.extend(canvas)

// AJAX
V.extend(ajax)

// COOKIE
V.extend(cookie)

