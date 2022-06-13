/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // let max = nums[0];
    // let sum=0;
    // for(let num of nums){
    //     if(sum < 0) sum = 0;
    //     sum+=num;
    //     max = Math.max(sum,max)
    // }
    // return max;
    
    //KADANE'S ALGO (O(N) time, O(1) space)
    let sum = -Infinity;
    let ans = -Infinity;
    for(let num of nums){
        sum = Math.max(num,sum+num);
        ans = Math.max(ans,sum);
    }
    return ans;
};