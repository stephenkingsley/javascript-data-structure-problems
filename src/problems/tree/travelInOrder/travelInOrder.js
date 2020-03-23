/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class Stack {
  constructor() {
    this.val = [];
  }

  pop() {
    return this.val.pop();
  }

  push(value) {
    this.val.push(value);
    return value;
  }

  isEmpty() {
    return this.val.length <= 0 ? true : false;
  }
}

var inorderTraversal = function(root) {
  const traverse = [];
  const stack = new Stack();
  let curr = root;
  while (curr != null || !stack.isEmpty()) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    traverse.push(curr.val);
    curr = curr.right;
  }
  return traverse;
 };
 