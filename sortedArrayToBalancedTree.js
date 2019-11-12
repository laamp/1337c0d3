/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    let mid = Math.floor(nums.length / 2);

    let node = new TreeNode(nums[mid]);

    let leftNums = nums.slice(0, mid);
    if (leftNums.length > 0) node.left = sortedArrayToBST(leftNums);

    let rightNums = nums.slice(mid + 1);
    if (rightNums.length > 0) node.right = sortedArrayToBST(rightNums);

    return node;
};