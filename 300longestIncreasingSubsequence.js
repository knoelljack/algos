https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    let longest = 1;
    
    for(let i=nums.length-1; i>=0; i--){
        for(let j=i+1; j < nums.length; j++){
            if(nums[i] < nums[j]){
                dp[i] = Math.max(dp[i],1+dp[j]);
                longest = Math.max(longest,dp[i]);
            }
        }
    }
    
    return longest;
};