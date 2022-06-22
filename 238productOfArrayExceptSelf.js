/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let ans = [];
    let multiplier = 1;
    for(let i=0; i<nums.length; i++){
        ans[i] = multiplier;
        multiplier *= nums[i];
    }
    multiplier = 1;
    for(let j=nums.length-1; j>=0; j--){
        ans[j] *= multiplier;
        multiplier *= nums[j];
    }
    return ans;
};