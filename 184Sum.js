https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b);
    let res = [];
    for(let i=0; i<nums.length-3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;
        let j = i+1;
        
        while(j < nums.length-2){
            while(j > i+1 && nums[j] == nums[j-1]) j++;
            let start = j+1;
            let end = nums.length-1;
            
            while(start < end){
                let sum = nums[i]+nums[j]+nums[start]+nums[end];
                if(sum === target){
                    res.push([nums[i],nums[j],nums[start],nums[end]]);
                    start++;
                    end--;
                    while(nums[start] == nums[start-1]) start++;
                    while(nums[end] == nums[end+1]) end++;
                }
                else if (sum > target){
                    end--;
                } else {
                    start++;
                }

            }
            j++;
        }
    }
    return res;
};