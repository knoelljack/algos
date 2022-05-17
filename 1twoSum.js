/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target) return [i,j];
        }
    }
    return [];
};

var twoSum = function(nums, target) {
    let dict = {};
    for(let i=0;i<nums.length; i++){
        let diff = target - nums[i];
        if(diff in dict) return [dict[diff],i]
        else dict[nums[i]] = i;
    }
    return []
};