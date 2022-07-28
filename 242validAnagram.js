https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let counts = {};
    for(let char of s){
        counts[char] ? counts[char]++ : counts[char] = 1;
    }
    for(let char of t){
        if(counts[char]){
            counts[char]--;
            if(counts[char] < 0) return false;
        } else {
            return false;
        }
    }
    return true;
};