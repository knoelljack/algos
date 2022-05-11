/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function (x) {
    let string = x.toString();
    for(let j=0; j<string.length; j++){
        if(string[j] != string[string.length-1-j]){
            return false;
        }
    }
    return true;
};