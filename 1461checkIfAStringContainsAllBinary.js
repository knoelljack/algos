/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
 var hasAllCodes = function(s, k) {
    let set = new Set();
    for(let i=k; i<=s.length; i++){
        set.add(s.slice(i-k,i));
    }
    return set.size == Math.pow(2,k)
};