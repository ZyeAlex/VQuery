import promise from '../promise'
import arg from './func/arg'
import commitString from './func/commitString'
import createXML from './func/createXML'

export default {

  ajax(options){
  
    //获取参数
    let { url, method = "get", data = {}, pyqt = true } = arg(options)

    // 判断执行get方法或者post方法
    return method === "get" ? $.get({url,data,pyqt}) : $.post({url,data,pyqt})

  },

  get(...options){

    return new promise( resolve => {
      // 获取参数
      let { url, data = {} , pyqt = true } = arg(options)
      // 创建AJAX对象
      let xhr = createXML()
      // 指定   请求方式     端口、文件                 异步
      xhr.open("get",url + "?" + commitString(data),pyqt)

      // 发送请求
      xhr.send()

      xhr.onreadystatechange = function(){
        if( this.readyState === 4 && this.status === 200 ){
          resolve(this.responseText)
        };
      };

    });

  },

  post(...options){

    return new promise( resolve => {

      // 获取参数
      let { url, data = {}, pyqt = true } = arg(options);

      // 创建AJAX对象
      let xhr = createXML()

      // 指定 请求方式 端口 异步
      xhr.open("post",url,pyqt)
  
      // 设置请求头
      xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")

      // 发送请求
      xhr.send(commitString(data))

      xhr.onreadystatechange = function(){
        if( this.readyState === 4 && this.status === 200 ){
          resolve(this.responseText)
        };
      };

    });

  }

}