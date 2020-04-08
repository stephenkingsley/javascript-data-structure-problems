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
var buildTreeByPreorderAndInorder = function(preorder, inorder) {
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

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTreeByInorderAndPostorder = function(inorder, postorder) {
  if (inorder.length <= 0 || postorder.length <= 0) {
    return null;
  }

  const root = new TreeNode(postorder[postorder.length - 1]);
  const rootIndexInInOrder = inorder.findIndex(ele => ele === root.val);
  
  const leftTreeNodes = inorder.slice(0, rootIndexInInOrder);
  const rightTreeNodes = inorder.slice(rootIndexInInOrder + 1, inorder.length);

  root.left = buildTree(
    leftTreeNodes,
    postorder.filter(ele => leftTreeNodes.indexOf(ele) > -1),
  );

  root.right = buildTree(
    rightTreeNodes,
    postorder.filter(ele => rightTreeNodes.indexOf(ele) > -1),
  );

  return root;
};
