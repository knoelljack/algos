/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let l = 0;
    let r = 0;
    let mostFreq = 0;
    let max = 0;
    let counts = {};
    while(r < s.length){
        counts[s[r]] ? counts[s[r]]++ : counts[s[r]] = 1;
        mostFreq = Math.max(mostFreq,counts[s[r]]);
        if(r-l+1-mostFreq > k){
            counts[s[l]]--;
            l++;
        }
        max = Math.max(max,r-l+1);
        r++;
    }
    return max;
};