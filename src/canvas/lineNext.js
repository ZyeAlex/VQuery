import newCanvas from './func/newCanvas.js';
import newMouse from './func/newMouse.js';

export default function(that,color,count,z,speed,size,length,radius){

  // 画布对象
  const canvas = newCanvas(that,z);
  // 画笔对象
  const context = canvas.getContext("2d");
  // 鼠标对象
  const mouse = newMouse(canvas);

  const points = [];
  // 生成线条
  for(let v = 0; v < canvas.width * canvas.height / 5000 * count ; v++ ){
    // point随机坐标 x坐标 y坐标
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    // point随机方向 x方向 y方向
    let xr = (Math.random()*2 - 1)*speed;
    let yr = (Math.random()*2 - 1)*speed;
    points.push({x,y,xr,yr});
  }

  draw();
  //绘制点
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // 两点x轴距离 两点y轴距离
    let x,y,dist,max;
    //遍历处理每一个点 
    points.forEach( before => {
      //移动
      before.x += before.xr;before.y += before.yr;

      //碰到边界，反向反弹
      before.xr *= before.x < canvas.width && before.x > 0 ? 1 : -1;
      before.yr *= before.y < canvas.height && before.y > 0 ? 1 : -1;

      //绘制点
      context.fillRect( before.x - size/2 , before.y - size/2 , size,size ); 

      //从下一个点开始
      points.concat(mouse).forEach( after => {
        max = after != mouse ? Math.pow(length,2) : Math.pow(radius,2);
          // 两点X轴距离
        x = before.x - after.x;
        // 两点Y轴距离
        y = before.y - after.y;

        dist = Math.pow(x,2)+Math.pow(y,2);

        if( dist < max ){

          //靠近的时候加速
          if( after === mouse && after.x !== null && after.y !== null && dist >= max / 2 ){
            before.x -= 0.03 * x;
            before.y -= 0.03 * y;
          }
          // 绘制线条
          context.beginPath();
          context.lineWidth = (max - dist) / max / 2;
          context.strokeStyle = color;
          context.moveTo(before.x, before.y);
          context.lineTo(after.x, after.y);
          context.stroke();
        }
      });

    });
    requestAnimationFrame(draw);
  }
  
}

