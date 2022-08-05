https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let res = [];
    
    var combine = (start,combo,sum) => {
        if(sum > target) return;
        if(sum == target) res.push(combo.slice());
        
        for(let i=start; i<candidates.length; i++){
            combine(i,[...combo,candidates[i]],sum+candidates[i]);
        }
    }
    
    combine(0,[],0);
    return res;
};