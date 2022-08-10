https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    return recurse(nums,0,nums.length-1);
};

var recurse = (nums,l,r) => {
    if(l > r) return null;
    let mid = Math.floor((r-l)/2+l);
    let root = new TreeNode(nums[mid]);
    root.left = recurse(nums,l,mid-1);
    root.right = recurse(nums,mid+1,r);
    return root;
}