https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a-b);
    let res = [];
    
    var dfs = function(start,subset){
        res.push(Array.from(subset));
        for(let i=start; i<nums.length; i++){
            if(i == start || nums[i] !== nums[i-1]){
                dfs(i+1,[...subset,nums[i]]);
            }
        }
    }
        
    dfs(0,[]);
    return res;
};