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
 var rightSideView = function(root) {
    let ans = [];
    if(!root) return ans;
    let q = [];
    q.push(root);
    while(q.length > 0){
        let n = q.length;
        let level = [];
        for(let i=0; i<n; i++) {
            let curr = q.shift();
            level.push(curr.val);
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        ans.push(level[level.length-1]);
    }
    return ans;
};