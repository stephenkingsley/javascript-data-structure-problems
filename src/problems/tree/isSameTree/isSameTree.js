class Stack {
  constructor() {
    this.val = [];
  }
  
  pop() {
    return this.val.pop();
  }
  
  push(val) {
    this.val.push(val);
  }
  
  isEmpty() {
    return this.val.length <= 0;
  }
}

const travelInOrder = (root) => {
const stack = new Stack();
const travels = [];

let curr = root;

while (curr !== null || !stack.isEmpty()) {
  while (curr !== null) {
    stack.push(curr);
    curr = curr.left;
    if (!curr) {
      travels.push(null);
    }
  }

  curr = stack.pop();
  travels.push(curr.val);
  curr = curr.right;
}

return travels;
};

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
* @param {TreeNode} p
* @param {TreeNode} q
* @return {boolean}
*/
var isSameTree = function(p, q) {
  const pResult = travelInOrder(p);
  const qResult = travelInOrder(q);
  
  if (pResult.length !== qResult.length) {
      return false;
  }
  
  for (let i = 0; i < pResult.length; i += 1) {
      if (pResult[i] !== qResult[i]) {
          return false
      }
  }
  
  return true;
};
