import newCanvas from './func/newCanvas.js';
import newMouse from './func/newMouse.js';
import newColor from './func/newColor.js';

export default function(that,opacity,speed,radius,count,z){
  // 获取canvas
  const canvas = newCanvas(that,z);
  // 获取画笔
  const ctx = canvas.getContext("2d");
  // 获取鼠标对象
  const mouse = newMouse(canvas);
  // 球对象
  class Ball{
    constructor(){
      this.x = mouse.x + (Math.random() - 0.5) * 10;
      this.y = mouse.y + (Math.random() - 0.5) * 10;
      this.xr = (Math.random() - 0.5) * speed * 10;
      this.yr = (Math.random() - 0.5) * speed * 10;
      this.radius = parseInt(Math.random() * radius * 10 + 40);
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
      if(this.x >= canvas.width || this.x <= 0){  this.xr = - this.xr;  }
      if(this.y >= canvas.height || this.y <= 0){  this.yr = - this.yr;  }
      this.x += this.xr;  this.y += this.yr;
      if(this.radius>0){  this.radius -= 1;  }
      return this;
    }
  }
  that.addEventListener(`mousedown`,function(e){
    const ballAll = [];
    while(ballAll.length<20*count){ ballAll.push(new Ball()); }
    animal();
    function animal(){
      requestAnimationFrame(animal);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for ( let i = 0; i < ballAll.length; i++ ){
        ballAll[i].run().draw();
      }
    }
  });
}