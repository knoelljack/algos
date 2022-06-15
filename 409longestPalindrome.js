/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let dict = {};
    let ans = 0;
    for(let char of s){
        dict[char] ? dict[char]++ : dict[char] = 1;
    }
    let odds = false;
    for(let key in dict){
        if(dict[key] % 2 == 0) ans+=dict[key];
        else{
            odds = true;
            ans+=dict[key]-1;
        }
    }
    return odds ? ans+1 : ans;
};