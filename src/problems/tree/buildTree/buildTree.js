/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length <= 0 || inorder.length <= 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const indexIO = inorder.findIndex(val => val === root.val);

  const leftTreeNodes = inorder.slice(0, indexIO);
  const roghtTreeNodes = inorder.slice(indexIO + 1, inorder.length);

  const leftTree = buildTree(
    preorder.filter(ele => leftTreeNodes.indexOf(ele) > -1),
    leftTreeNodes,
  );

  const rightTree = buildTree(
    preorder.filter(ele => roghtTreeNodes.indexOf(ele) > -1),
    roghtTreeNodes,
  );

  root.left = leftTree;
  root.right = rightTree;

  return root;
};
