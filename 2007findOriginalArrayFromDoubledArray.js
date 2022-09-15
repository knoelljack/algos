https://leetcode.com/problems/find-original-array-from-doubled-array/

/**
 * @param {number[]} changed
 * @return {number[]}
 */
 var findOriginalArray = function(changed) {
    if(changed.length % 2 !== 0) return [];
    changed.sort((a,b) => a-b);
    let vals = {};
    let res = [];
    
    for(let num of changed){
        vals[num] ? vals[num]++ : vals[num] = 1;
    }
    
    for(let i=changed.length-1; i>=0; i--){
        let curr = changed[i];
        if(vals[curr] === 0) continue;
        if(vals[curr/2] > 0){
            vals[curr/2]--;
            vals[curr]--;
            res.push(curr/2);
        } else {
            return [];
        }
    }
    
    return res;
    
};