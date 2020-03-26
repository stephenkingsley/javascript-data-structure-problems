/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  console.log(root);
  if (!root) {
    return 0;
  }

  const arr = [[root.val]];
  let curr = [root];

  while(curr.filter(e => e).length > 0) {
    let tmpArr = [];
    curr.forEach(node => {
      if (node.left) {
        tmpArr.push(node.left);
      }

      if (node.right) {
        tmpArr.push(node.right);
      }
    });

    const valList = tmpArr.map(ele => ele.val);
    if (valList.length > 0) {
      arr.push(valList);
    }    
    curr = tmpArr;
  }

  return arr.length;
};