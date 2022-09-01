https://leetcode.com/problems/top-k-frequent-words/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 var topKFrequent = function(words, k) {
    let counts = new Map();
    let bucket = [];
    let res = [];
    
    for(let w of words){
        counts.set(w, (counts.get(w) || 0) + 1);
    }
    for(let [word,count] of counts){
        if(bucket[count] == undefined) bucket[count] = [word];
        else bucket[count].push(word);
    }
    for(let i=bucket.length-1; i>-1; i--){
        if(bucket[i]===undefined) continue;
        res.push(...bucket[i].sort());
        if(res.length >= k) return res.slice(0,k);
    }
};