https://leetcode.com/problems/binary-tree-pruning/

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
 * @return {TreeNode}
 */
 var pruneTree = function(root) {
    
    var prune = (node) => {
        if(!node) return null;
        let left = prune(node.left);
        let right = prune(node.right);
        if(!left && !right && !node.val) return null;
        node.left = left;
        node.right = right;
        return node;
    }
    
    return prune(root);
};