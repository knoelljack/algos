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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    var checkNode = function(curr,k,dict){
        if(!curr) return false;
        if(dict[k-curr.val]) return true;
        dict[curr.val] = 1;
        return checkNode(curr.left,k,dict) || checkNode(curr.right,k,dict);
    }
    return checkNode(root,k,{});
};