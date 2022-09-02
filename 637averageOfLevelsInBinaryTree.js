https://leetcode.com/problems/average-of-levels-in-binary-tree/

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
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    if(!root) return [];
    let res = [];
    let q = [root];
    
    while(q.length){
        let len = q.length;
        
        let levelTotal = 0;
        for(let i=0; i<len; i++){
            let curr = q.shift();
            levelTotal+=curr.val;
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        res.push(levelTotal/len);
    }
    
    return res;
};