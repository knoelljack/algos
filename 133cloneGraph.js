/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
    let map = new Map();
    
    var dfs = function(curr){
        if(map.has(curr)) return map.get(curr);
        let copy = new Node(curr.val);
        map.set(curr,copy);
        for(let n of curr.neighbors){
            copy.neighbors.push(dfs(n));
        }
        return copy;
    }
    return node ? dfs(node) : null;
};