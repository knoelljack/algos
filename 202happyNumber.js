/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let seen = {};
    while(n!==1 && !seen[n]){
        seen[n] = true;
        n = sumOfSquares(n);
    }
    return n === 1;
};
    
var sumOfSquares = function(n) {
    n = String(n).split("").map(Number);
    let sum = 0;
    for (let i=0; i<n.length; i++){
        sum+=Math.pow(n[i],2);
    }
    return sum;
}