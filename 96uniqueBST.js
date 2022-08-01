https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    let res = new Array(n+1).fill(0);
    res[0] = 1;
    res[1] = 1;
    for(let i=2; i<=n; i++){
        for(let j=1; j<=i; j++){
            res[i] += res[i-j]*res[j-1];
        }
    }
    return res[n];
};