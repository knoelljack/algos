/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    //SLIDING WINDOW APPROACH
    let i=0;
    let j=0;
    let longest = 0;
    let set = new Set();
    while(i < s.length && j < s.length){
        if(!set.has(s[j])){
            set.add(s[j]);
            longest = Math.max(longest,j-i+1);
            j++;
        } else {
            set.delete(s[i]);
            i++;
        }
    }
    return longest;
};