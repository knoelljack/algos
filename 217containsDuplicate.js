/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    return nums.length === new Set(nums).size ? false : true
    // let dict = {}
    // for(let i=0; i<nums.length; i++){
    //     if(!dict[nums[i]]) dict[nums[i]] = 1;
    //     else dict[nums[i]]++;
    //     if(dict[nums[i]]>1){
    //         return true
    //     }
    // }
    // return false
};