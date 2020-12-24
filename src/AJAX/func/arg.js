import err from '../../err'
import error from './error'
// 解析参数
export default function(options){
  
  // 判断是否ajax函数传参
  // 如果options为空或者options的构造函数为Object，说明options为函数ajax的参数
  if( !options || options.constructor === Object ){

    if( options && options.url ){
      return options
    }
    throw new Error(`
    ${err.arg}
    ${err.args}
    {
      ${error.url}
      ${err._}
      ${error.data}
      ${error.pyqt}
    }`)

  }
  // 判断get函数和post函数的参数
  // 参数为数组，且数组有长度
  if( options.constructor === Array && options.length ){

    // 数组第一个元素为对象，且对象内含有url属性
    if( options[0].constructor === Object && options[0].url ){
      return options[0]
    }

    // 如果参数第一个元素为字符串，则字符串为url
    if( typeof options[0] === "string" ){
      let url = options[0],
          data = options[1],
          pyqt = options[2];
      return {url,data,pyqt}
    }

  };

  //如果参数错误，抛出错误
  throw new Error(`
  ${err.arg}
  ${err.args}
  ${error.url}
  ${err._}
  ${error.data}
  ${error.pyqt}

  或以对象形式传入！`)

};