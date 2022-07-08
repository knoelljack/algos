https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let result = [];
    if(!root) return result;
    let q = [];
    q.push(root);
    let leftToRight = true;
    
    while(q.length > 0){
        let levelSize = q.length;
        let level = [];
        for(let i=0; i<levelSize; i++){
            let curr = q.shift();
            if(leftToRight) level.push(curr.val);
            else level.unshift(curr.val);
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        result.push(level);
        leftToRight = !leftToRight;
    }
    return result;
};