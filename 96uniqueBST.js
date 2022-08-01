https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    return count(n,{});
    // let res = new Array(n+1).fill(0);
    // res[0] = 1;
    // res[1] = 1;
    // for(let i=2; i<=n; i++){
    //     for(let j=1; j<=i; j++){
    //         res[i] += res[i-j]*res[j-1];
    //     }
    // }
    // return res[n];
};

var count = function(i,cache){
    if(cache[i]) return cache[i];
    if(i <= 1) return 1;
    let total = 0;
    for(let j=1; j<=i; j++){
        let left = count(j-1,cache);
        let right = count(i-j,cache);
        total += left*right;
    }
    cache[i] = total;
    return cache[i];
}