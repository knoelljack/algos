/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length === 1 || s.length === 0) return s;
    let longest = "";
    for(let i=0; i<s.length; i++){
        let str1 = expand(s,i,i);
        let str2 = expand(s,i,i+1);
        let max = str1.length > str2.length ? str1 : str2;
        if(max.length > longest.length) longest = max;
    }
    return longest;
};

var expand = function(string,l,r){
    while(l >= 0 && r < string.length && string[l] === string[r]){
        l--;
        r++;
    }
    return string.substring(l+1,r);
}