import err from '../err'
import error from './func/error'

export default {
  
  // cookie方法
  cookie(...options){
    let that;
    // 如果没有传入值，调用读取cookie函数
    if( !options.length || options.length === 1 && typeof options[0] === "string" ){ 
      that = $.getCookie(...options);
    }
    // 如果传入的前两个参数为字符串，则调用设置cookie函数
    if( typeof options[0] === "string" && typeof options[1] === "string" ){
      that = $.setCookie(...options)
    }
    if ( typeof options[0] === "string" && options[1] === null ){
      that = $.removeCookie(options[0])
    }
    if( that !== undefined ){
      return that
    }else{
      throw new Error(`
      ${err.arg}
      ${err.args}`)
    }
  },
  // 读取cookie
  getCookie(option){
    // 存储cookie对象的数组
    let cookie_arr = []
    // 将cookie字符串分割成cookie数组对
    document.cookie.split("; ").forEach(v => {
      // 将每个cookie数组对的键和值分开
      let cookie_cache = v.split("=")
      // 将cookie键和cookie值通过对象存储cookie对象数组
      cookie_arr.push({[cookie_cache[0]]:cookie_cache[1]})
    });
    // 如果传入选择器，返回选中的cookie对象或者null
    if(option){
      let cookie_obj = cookie_arr.filter(v=>Object.keys(v)==option)[0];
      return cookie_obj || null
    }
    // 如果未传入选择器，返回cookie数组
    return cookie_arr
  },
  // 设置cookie
  setCookie(key,value,time){
    // 参数错误
    if(!key || !value){ 
      throw new Error(`
      ${err.arg}
      ${err.args}
      ${error.key}
      ${error.value}
      ${err._}
      ${error.time}`)
    }
    let setTime = ""
    if(time & typeof parseFloat(time) === "number" ){
      let newTime = new Date()
      newTime.setTime( newTime.getTime() + parseInt(parseFloat(time) * 24 * 60 * 60 * 1000));
      setTime = `;expires=${newTime}`
    }
    document.cookie = `${key}=${value};${setTime}`
    return this
  },
  // 删除cookie
  removeCookie(key){
    // 参数错误报错
    if(!key || typeof key !== "string"){
      throw new Error(`
      ${err.arg}
      ${err.args}
      ${error.key}`)
    }
    // 未找到cookie
    if( $.getCookie(key) === null ){
      return "cookie中没有该值！！！"
    }
    // 删除成功
    else{
      $.setCookie(key," ",-1);
      return "cookie删除成功！！！"
    }
  }

}