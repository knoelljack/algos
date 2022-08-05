https://leetcode.com/problems/combination-sum-iv/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target) {
    let cache = {};
    
    var tryCombos = (target) => {
        if(target in cache) return cache[target];
        if(target === 0) return 1;
        if(target < 0) return 0;
        
        let total = 0;
        
        for(let num of nums){
        if(num <= target){
            total += tryCombos(target-num);
            }
        }
        cache[target] = total;
        return total;
    }
    
    return tryCombos(target);
};