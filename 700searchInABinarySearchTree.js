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
 * @param {number} val
 * @return {TreeNode}
 */
//ITERATIVE SOLUTION FIRST THEN RECURSIVE SOLUTION 2ND

 var searchBST = function(root, val) {
    // let curr = root;
    // while(curr && curr.val != val){
    //     if(curr.val > val) curr=curr.left;
    //     else if (curr.val < val) curr= curr.right;
    // }
    // return curr;
    if(!root) return root
    if(root.val == val) return root;
    return root.val > val ? searchBST(root.left,val) : searchBST(root.right,val);
};