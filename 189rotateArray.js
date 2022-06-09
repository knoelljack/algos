/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    //strategy: reverse the array, the k num of elements you need will be in the front, reverse each section of up to k and then after k.
    //mod k to get remainder if k larger than num of elements in list
    k = k % nums.length-1;
    nums.reverse();
    helper(nums,0,k);
    helper(nums,k+1,nums.length-1)
    
};

var helper = function(nums,start,end){
   while(start < end){
       [nums[start],nums[end]] = [nums[end],nums[start]];
       start++;
       end--;
   }
}
