  // 获取父元素
export default function(node,recursion=false){
  let allNodes = []
  !function thatParentNode(node){
    if(node.parentNode){
      allNodes.push(node.parentNode)
      if(recursion && node.parentNode.parentNode){
        thatParentNode(node.parentNode)
      }
    }
  }(node)
  return allNodes
}