/**
 * @param {number} n
 * @return {number}
 */

//FIRST ITERATIVE SECOND RECURSIVE

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
        if(cache[n]) return cache[n];
        cache[n] = recursiveClimb(n-1,cache)+recursiveClimb(n-2,cache);
        return cache[n];
    }
    return recursiveClimb(n,{1:1,2:2});
};