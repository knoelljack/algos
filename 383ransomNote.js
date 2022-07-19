https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let dict = {};
    for(let char of magazine){
        dict[char] ? dict[char]++ : dict[char] = 1;
    }
    for(let char of ransomNote) {
        if(dict[char]){
            dict[char]--;
            if(dict[char] < 0) return false;
        } else {
            return false;
        }
    }
    return true;
};