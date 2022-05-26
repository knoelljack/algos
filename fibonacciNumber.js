/**
 * @param {number} n
 * @return {number}
 */
//1ST w/o memoization implementation 2nd with cache for memoization
 var fib = function(n) {
    // if(n<2) return n;
    // return fib(n-1)+fib(n-2);

    let cache = {};
    if(cache[n]) return cache[n];
    let result;
    if(n<2) result=n;
    else result = fib(n-1)+fib(n-2);
    cache[n] = result;
    return result;
};