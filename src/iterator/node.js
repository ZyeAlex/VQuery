
// 遍历DOM节点 V对象 执行函数
export default function(that,fn){
  // 遍历每个DOM执行fn函数
  for(const v of that){ fn(v); }
};