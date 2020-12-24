import check from './check'
// 获取子元素节点  节点集合数组 选择器  是否递归 
export default function (node,select,recursion=false){

  // 存储所有子节点
  let allNodes = []

  // 获取当前元素子元素
  !function thatChildren(node){

    // 获取当前元素的子元素
    let childrenNodes = node.children

    // 遍历所有子元素
    for( let i = 0;i < childrenNodes.length; i++ ){

      allNodes.push(childrenNodes[i])
      // 递归调用
      if( recursion && childrenNodes[i].children.length ){

        thatChildren(childrenNodes[i])

      }

    }

  }(node)
  // 筛选元素
  if(select){
    allNodes = check(allNodes,select)
  }
  return [...new Set(allNodes)]
}