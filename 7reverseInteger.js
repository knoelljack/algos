/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let reversed = Math.abs(x).toString().split("").reverse().join("");
    if(reversed > 2**31) return 0;
    return reversed*Math.sign(x);
};