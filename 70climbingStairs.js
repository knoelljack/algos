/**
 * @param {number} n
 * @return {number}
 */
//FIRST ITERATIVE, 2ND RECURSIVE

 var climbStairs = function(n) {
    // if(n==1){
    //     return 1;
    // }
    // let a = 0;
    // let b = 0;
    // let c = 1;
    // for(let i=0; i<n; i++){
    //     a = b+c;
    //     b = c;
    //     c = a;
    // }
    // return c;
    var recursiveClimb = function(n,cache){
        if(n===0||n===1) return 1;
        if(n===2) return 2;
        if(cache[n]) return cache[n];
        let result = climbStairs(n-1,cache)+climbStairs(n-2,cache);
        cache[n] = result;
        return result;
    }
    return recursiveClimb(n,{});
};