https://leetcode.com/problems/reduce-array-size-to-the-half/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    let half = arr.length/2;
    let freq = {};
    for(let num of arr){
        freq[num] ? freq[num]++ : freq[num] = 1;
    }
    
    let sortedFreqs = Object.values(freq).sort((a,b) => b-a);
    let moves = 0;
    
    for(let s of sortedFreqs){
        half -= s;
        moves++;
        if(half <= 0) return moves;
    }
    return -1;
};