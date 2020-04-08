/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }

  let valueList = [];
  let nodeList = [root];

  while(nodeList.length > 0) {
    const arr = [];
    const newNodeList = [];
    nodeList.forEach(ele => {
      if (ele) {
        arr.push(ele.val);
        newNodeList.push(ele.left);
        newNodeList.push(ele.right);
      }
    });

    if (arr.length > 0) {
      valueList = [].concat([], [arr], valueList);
    }

    nodeList = newNodeList;
  }

  return valueList;  
};
