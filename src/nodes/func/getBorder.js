// 获取兄弟节点
export default function(node,next,recursion=false){
let allNodes = []
!function thatBortherNode(node){
  if(next){
    allNodes.push(node.nextElementSibling)
    if(recursion && node.nextElementSibling.nextElementSibling){
      thatBortherNode(node.nextElementSibling)
    }
  }else{
    allNodes.push(node.previousElementSibling)
    if(recursion && node.previousElementSibling.previousElementSibling){
      thatBortherNode(node.previousElementSibling)
    }
  }
}(node)
return allNodes
}