import ballRun from './ballRun.js';
import ballBoom from './ballBoom.js';
import lineNext from './lineNext.js';

export default {

  // 运动小球
  //无规则运动的小球
  ballRun(options){

    // 透明度 速度 半径 数量
    let {opacity=0.2,speed=1,radius=1,count=1,z=1} = (function(){
      if(options && options.constructor === Object){
        return options;
      }else{
        return {};
      }
    })();

    // 如果当前对象为V对象，将body传入
    if( this===V ){ ballRun(document.body,opacity,speed,radius,count,z); }
    // 如果当前对象为v对象，将dom集合遍历传入
    else{ node( this, that => ballRun(that,opacity,speed,radius,count,z) ); }

    return this;

  
  },
  
  // 爆炸小球
  //鼠标点击爆炸的小球
  ballBoom(options){
    // 透明度 速度 半径 数量
    let {opacity=1,speed=1,radius=1,count=1,z=1} = (function(){
      if(options && options.constructor === Object){
        return options;
      }else{
        return {};
      }
    })();
    // 如果当前对象为V对象，将body传入
    if( this===V ){ ballBoom(document.body,opacity,speed,radius,count,z); }
    // 如果当前对象为v对象，将dom集合遍历传入
    else{ node(this,that=>ballBoom(that,opacity,speed,radius,count,z)); }
    return this;

    
  },

  // 随机线条
  lineNext(options){

    // 透明度 速度 半径 数量
    let {color="rgba(0,0,0,.3)",count = 1,z = 1,speed=1,size=1,length=60,radius=150} = (function(){
      if(options && options.constructor === Object){
        return options;
      }else{
        return {};
      }
    })();

    // 如果当前对象为V对象，将body传入
    if( this===V ){  lineNext(document.body,color,count,z,speed,size,length,radius);  }
    // 如果当前对象为v对象，将dom集合遍历传入
    else{  node( this, that => lineNext(that,color,count,z,speed,size,length,radius) );  }

    

  }

}