https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let res = [];
    let counts = {};
    
    for(let char of p){
        counts[char] ? counts[char]++ : counts[char]=1;
    }
    
    let left = 0;
    let right = 0;
    let count = p.length;
    
    while(right < s.length){
        if(counts[s[right]] > 0) count--;
        counts[s[right]]--;
        right++;
        
        if(count === 0) res.push(left);
        if(right-left === p.length){
            if(counts[s[left]] >= 0){
                count++;
            }
            counts[s[left]]++;
            left++;
        }
    }
    return res;
};