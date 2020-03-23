class Stack {
  constructor() {
    this.val = [];
  }

  pop() {
    return this.val.pop();
  }

  push(value) {
    this.val.push(value);
    return this.val;
  }

  isEmpty() {
    return this.val.length <= 0 ? true : false;
  }
}

const inorderTraversal = (root) => {
    const traverse = [];
    const stack = new Stack();
    
    let curr = root;
    while(curr !== null || !stack.isEmpty()) {
        while(curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();
        traverse.push(curr.val);
        curr = curr.right;
    }
    return traverse;
};

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
var isValidBST = function(root) {
    const traverse = inorderTraversal(root);
    console.log(traverse);
    for (let i = 1; i < traverse.length; i += 1) {
        if (traverse[i - 1] >= traverse[i] || traverse[i + 1] <= traverse[i]) {
            return false;
        }
    }
    
    return true;
};