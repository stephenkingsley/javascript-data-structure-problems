/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const generateBSTTree = (start, end) => {
    const allTrees = [];
    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }

    for (let i = start; i <= end; i++) {
      const leftTrees = generateBSTTree(start, i - 1);
      const rightTrees = generateBSTTree(i + 1, end);

      for (let l of leftTrees) {
        for (let r of rightTrees) {
          const currentTree = new TreeNode(i);
          currentTree.left = l;
          currentTree.right = r;
          allTrees.push(currentTree);
        }
      }
    }
    return allTrees;
  };

  if (n === 0) {
    return [];    
  }
  return generateBSTTree(1, n);
};
