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
var isBalanced = function (root) {
    if (!root) return true;

    let ldepth = crawler(root.left);
    let rdepth = crawler(root.right);

    if (Math.abs(ldepth - rdepth) <= 1 && isBalanced(root.left) && isBalanced(root.right)) {
        return true;
    } else {
        return false;
    }
};

const crawler = root => {
    if (root) {
        return 1 + Math.max(crawler(root.right), crawler(root.left));
    } else {
        return 0;
    }
};