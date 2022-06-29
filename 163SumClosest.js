/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a-b);
    let minDiff = Infinity;
    for(let i=0; i<nums.length-2; i++){
        let left = i+1;
        let right = nums.length-1;
        while(left < right){
            let targetDiff = target-nums[i]-nums[left]-nums[right];
            if(targetDiff === 0) return target;
            if(Math.abs(targetDiff) < Math.abs(minDiff) || 
              (Math.abs(targetDiff) === Math.abs(minDiff) && targetDiff > minDiff)){
                minDiff = targetDiff;
            }
            if(targetDiff > 0) left++;
            else right--;
        }
    }
    return target-minDiff;
};