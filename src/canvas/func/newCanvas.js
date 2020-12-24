// canvas对象创建
export default function(that,z=1){
  // 创建画布
  let canvas = document.createElement("canvas");
  
  // 画布属性
  that.style.position = "relative";
  canvas.style.cssText = `pointer-events:none;position:absolute;top:0;left:0;z-index:${z}`;
  
  // 将canvas插入dom
  that.appendChild(canvas);

  // 画布大小即窗口变化时画布大小
  (function message(){
    canvas.height = parseInt(getComputedStyle(that).height);
    canvas.width  = parseInt(getComputedStyle(that).width);
    canvas.left   = canvas.getBoundingClientRect().left;
    canvas.top    = canvas.getBoundingClientRect().top;
  })();
  window.addEventListener(`resize`,message);
  
  return canvas;

  
};
