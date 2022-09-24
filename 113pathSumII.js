https://leetcode.com/problems/path-sum-ii/

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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let res = [];
    let path = [];
    let sum = 0;
    
    var dfs = (node) => {
        if(!node) return;
        path.push(node.val);
        sum += node.val;
        if(!node.left && !node.right && sum === targetSum) res.push([...path]);
        dfs(node.left);
        dfs(node.right);
        sum -= node.val;
        path.pop();
    }
    
    dfs(root);
    return res;
};