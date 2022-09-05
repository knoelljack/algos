https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let res = [];
    
    while(q.length){
        let levelSize = q.length;
        let level = [];
        for(let i=0; i<levelSize; i++){
            let curr = q.shift();
            level.push(curr.val);
            if(curr.children){
                for(let child of curr.children){
                    q.push(child);
                }
            }
        }
        res.push(level);
    }
    
    return res;
    
};