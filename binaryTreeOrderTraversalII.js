/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];

    let queue = [root];
    let results = [];

    while (queue.length > 0) {
        let current = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            current.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        results.unshift(current);
    }

    return results;
};