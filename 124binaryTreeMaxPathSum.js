https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
    let max = -Infinity;
    
    var dfs = function(node){
        if(!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        left = Math.max(left,0);
        right = Math.max(right,0);
        max = Math.max(max,left+right+node.val);
        return Math.max(left,right) + node.val;
    }
    dfs(root);
    return max;
};