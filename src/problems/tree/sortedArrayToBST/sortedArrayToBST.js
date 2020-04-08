function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length <= 0) {
    return null;
  }

  if (nums.length === 1) {
    return new TreeNode(nums[0]);
  }

  const rootIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[rootIndex]);
  root.left = sortedArrayToBST(
    nums.slice(0, rootIndex)
  );
  root.right = sortedArrayToBST(
    nums.slice(rootIndex + 1, nums.length)
  );
  return root;
};
