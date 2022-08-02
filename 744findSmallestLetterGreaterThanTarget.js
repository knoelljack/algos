https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
 var nextGreatestLetter = function(letters, target) {
    let n = letters.length;
    let low = 0;
    let high = letters.length-1;
    
    while(low <= high){
        let mid = Math.floor((high-low)/2 + low);
        if(letters[mid] > target) high = mid-1;
        else low = mid+1;
    }
    
    return letters[low%n];
};