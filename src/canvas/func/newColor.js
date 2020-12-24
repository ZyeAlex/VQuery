// 随机颜色
export default function(opacity=1,r=parseInt(Math.random()*256),g=parseInt(Math.random()*256),b=parseInt(Math.random()*256)){
  return `rgba(${r},${g},${b},${opacity})`;
};