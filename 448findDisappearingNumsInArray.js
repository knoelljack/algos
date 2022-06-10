/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    for(let num of nums){
        let index = Math.abs(num)-1;
        if(nums[index] > 0) nums[index]*=-1;
    }
    let ans = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0) ans.push(i+1)
    }
    return ans
};