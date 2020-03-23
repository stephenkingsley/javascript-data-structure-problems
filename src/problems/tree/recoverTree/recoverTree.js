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

const traverseInOrder = (node) => {
    const stack = new Stack();
    const traverseArr = [];
    let curr = node;
    while (curr !== null || !stack.isEmpty()) {
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }

      curr = stack.pop();
      traverseArr.push(curr);
      curr = curr.right;
    }

    return traverseArr;
};

const findSwappedIndexs = (traverseArr) => {
    let x = -1;
    let y = -1;

    for (let i = 0; i < traverseArr.length - 1; i += 1) {
      if (traverseArr[i].val > traverseArr[i + 1].val) {
        y = i + 1;
        if (x <= -1) {
          x = i;
        }
      }
    }
    return [x, y];
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const traverseArr = traverseInOrder(root);
  const [x, y] = findSwappedIndexs(traverseArr);
  const valueX = traverseArr[x].val;
  const valueY = traverseArr[y].val;

  traverseArr[x].val = valueY;
  traverseArr[y].val = valueX;
};
