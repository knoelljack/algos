https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    let prev = null;
    
    var dfs = function(node){
        if(!node) return;
        dfs(node.right);
        dfs(node.left);
        node.left = null;
        node.right = prev;
        prev = node;
    }
    
    dfs(root);
    
};