https://leetcode.com/problems/count-good-nodes-in-binary-tree/

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
 var goodNodes = function(root) {
    if(!root) return 0;
    let count = 0;
    
    var dfs = (node,pathMax) => {
        if(!node) return;
        if(node.val >= pathMax) count++;
        pathMax = Math.max(pathMax,node.val);
        dfs(node.left,pathMax);
        dfs(node.right,pathMax);
    }
    
    dfs(root,root.val);
    return count
};