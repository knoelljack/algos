/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let cache = {};
    var calc = function(n){
        if(n < 2) return n;
        if(cache[n]) return cache[n];
        else {
            cache[n] = calc(n-1)+calc(n-2);
            return cache[n];
        }
    }
    return calc(n);
};