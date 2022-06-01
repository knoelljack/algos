/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // for(let i=0; i<=nums.length; i++){
    //     if(!nums.includes(i)) return i
    // }

    //IF SORTED COMPARE INDEX TO VALUE
    nums = nums.sort();
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid] != nums[mid-1]+1) return mid;
        if(nums[mid] > mid) right = mid-1;
        if(nums[mid] == mid) left = mid+1;
    }
    return 0;
};

console.log(missingNumber([0,1,2,4,5]));
console.log(missingNumber([0,1,2,3,5]));