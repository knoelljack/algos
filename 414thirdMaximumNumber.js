/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    
    
    //USING SET O(n) space
    let set = new Set(nums);
    if(set.size < 3) return Math.max(...set);
    set.delete(Math.max(...set));
    set.delete(Math.max(...set));
    return Math.max(...set);
};