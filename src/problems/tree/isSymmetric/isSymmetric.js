class Stack {
  constructor(val) {
    this.val = val || [];
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

const travelInOrder = (node) => {
  debugger;
  const stack = new Stack();
  const travels = [];

  let curr = node;
  while(curr !== null || !stack.isEmpty()) {
    while(curr !== null) {
      const tem = Object.assign({}, curr);
      stack.push(curr);
      curr = curr.left;
      
      if (!curr) {
        if (tem.left || tem.right) {
          stack.push({});
        }
      }

    }

    curr = stack.pop();
    travels.push(curr.val);
    curr = curr.right;
  }

  return travels;
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
  const treeArray = travelInOrder(root);

  console.log(treeArray);
  if (treeArray.length <= 0) {
    return true;
  }
  
  if (treeArray.length % 2 === 0) {
    return false;
  }

  const middleIndex = parseInt(treeArray.length / 2);
  for (let i = 0; middleIndex - i >= 0; i += 1) {
    if (treeArray[middleIndex - i] !== treeArray[middleIndex + i]) {
      return false;
    }
  }

  return true;
};
