class Stack {
  constructor() {
    this.val = [];
  }

  pop() {
    return this.val.pop();
  }

  push(val) {
    this.val.push(val)
  }

  isEmpty() {
    return this.val.length <= 0;
  }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const stack = new Stack();
  stack.push(root);
  stack.push(root);

  while (!stack.isEmpty()) {
    const tl = stack.pop();
    const tr = stack.pop();

    if (tl === null && tr === null) {
      continue;
    }

    if (tl === null || tr === null) {
      return false;
    }

    if (tl.val !== tr.val) {
      return false;
    }

    stack.push(tl.left);
    stack.push(tr.right);

    stack.push(tl.right);
    stack.push(tr.left);
  }

  return true;
};
