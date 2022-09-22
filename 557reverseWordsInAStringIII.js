https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    
    let res = [];
    s = s.split(' ');
    
    for(let word of s){
        res.push(word.split('').reverse().join(''));
    }
    
    return res.join(' ');
};