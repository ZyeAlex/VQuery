
import html from './html'
import addHTML from './addHTML'
import text from './text'
import value from './val'
import reset from './reset'

export default {
  // html操作
  html(val){
    let toThat = this
    node( this, that => toThat = html(that,val) || toThat )
    return toThat
  },
  // 添加html beforebegin  afterbegin  beforeend afterend 
  addHTML(operate,html){
    node( this, that => addHTML( that, operate, html ) )
    return this
  },
  // text操作
  text(val){
    let toThat = this
    node( this, toThat = that => text( that, val ) || toThat )
    return toThat
  },
  // value操作
  val(val){
    return this.value(val)
  },
  value(val){
    let toThat = this
    node( this, toThat = that => value(that,val) || toThat )
    return toThat
  },
  // 表格重置
  reset(){
    node(this,reset)
  }
}