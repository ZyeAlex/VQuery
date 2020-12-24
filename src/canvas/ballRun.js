import newCanvas from './func/newCanvas.js';
import newMouse from './func/newMouse.js';
import newColor from './func/newColor.js';

export default function(that,opacity,speed,radius,count,z){
  // 获取canvas的id
  const canvas = newCanvas(that,z);
  // 获取画笔
  const ctx = canvas.getContext("2d");
  // 获取鼠标对象
  const mouse = newMouse(canvas);
  // 球
  class Ball{
    constructor(){
      // X轴移动速度
      this.xr = (Math.random() - 0.5) * speed * 5;
      // Y轴移动速度
      this.yr = (Math.random() - 0.5) * speed * 5;
      // 半径
      this.radius =  parseInt(Math.random() * radius * 10 + radius * 2);
      // X轴坐标
      this.x = parseInt(Math.random() * ( canvas.width - 2*this.radius ) + this.radius );
      // Y轴坐标
      this.y = parseInt(Math.random() * ( canvas.height - 2*this.radius ) + this.radius );
      // 最小半径
      this.minRadius = this.radius;
      // 最大半径
      this.maxRadius = Math.random()*25 + this.radius;
      // 颜色
      this.color = newColor(opacity);
    }
    // 球绘制
    draw(){
      ctx.beginPath();
      ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    // 球运动
    run(){
      if (this.x >= canvas.width || this.x <= 0)  {this.xr = - this.xr;}
      if (this.y >= canvas.height || this.y <= 0) {this.yr = - this.yr;}
      this.x += this.xr; this.y += this.yr;
      if(this.x - mouse.x > -100 && this.y - mouse.y > -100 && this.x - mouse.x < 100 && this.y - mouse.y < 100 && this.radius < this.maxRadius){
        this.radius+=1;
      }else if (this.radius > this.minRadius){
        this.radius-=1;
      }
      return this;
    }
  }


  //  创建小球
  const ballAll = [];
  creatBall();
  // 窗口大小改变事件
  window.addEventListener(`resize`,creatBall);
  function creatBall(){
    while( ballAll.length < (canvas.width+canvas.height)/(3/count)-100 ){
      ballAll.push( new Ball() );
    }
  }
  // 球运动
  animal();
  function animal(){

    ctx.clearRect(0,0,canvas.width,canvas.height);
    for ( let i = 0; i < ballAll.length; i++ ){
      ballAll[i].run().draw();
    }

    // 递归
    requestAnimationFrame(animal);

  }
}