/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {
    var generate = function(lo,hi){
        if(lo > hi) return [null];
        let res = [];
        for(let i=lo; i<=hi; i++){
            let left = generate(lo,i-1);
            let right = generate(i+1,hi);
            for(l of left){
                for(r of right){
                    res.push(new TreeNode(i,l,r))
                }
            }
        }
        return res;
    }
    return generate(1,n);
};