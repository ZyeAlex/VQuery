export default function(canvas){
  // 鼠标对象
  const mouse = {
    // 鼠标x轴
    x:null,
    // 鼠标y轴
    y:null
  };

  document.addEventListener(`mousemove`,function(e){
    //鼠标位置
    e = e || window.event;
    mouse.x = e.clientX - canvas.left;
    mouse.y = e.clientY - canvas.top;
  });

  document.addEventListener(`mouseout`,function(){
    //释放鼠标位置
    mouse.x = null;
    mouse.y = null;
  });
  
  // 返回鼠标对象
  return mouse;
}