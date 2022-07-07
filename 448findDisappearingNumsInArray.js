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

//CYCLIC SORT APPROACH
var findDisappearedNumbers = function(nums) {
    let i = 0;
    let n = nums.length;
    while(i < n){
        let j = nums[i]-1;
        if(nums[i] !== nums[j]){
            [nums[i],nums[j]] = [nums[j],nums[i]];
        } else {
            i++;
        }
    }
    let missing = [];
    for(let i=0; i<n; i++){
        if(nums[i] !== i+1) missing.push(i+1);
    }
    return missing;
};