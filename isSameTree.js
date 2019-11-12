function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let n1_A = new TreeNode(1);
let n2_A = new TreeNode(2);
let n3_A = new TreeNode(3);

n1_A.left = n2_A;
n1_A.right = n3_A;

let n1_B = new TreeNode(1);
let n2_B = new TreeNode(2);
let n3_B = new TreeNode(3);

n1_B.left = n2_B;
n1_B.right = n3_B;

console.log(isSameTree(n1_A, n1_B));

let n1_C = new TreeNode(1);
let n2_C = new TreeNode(2);

n1_C.left = n2_C;

let n1_D = new TreeNode(1);
let n2_D = new TreeNode(2);

n1_D.right = n2_D;

console.log(isSameTree(n1_C, n1_D));