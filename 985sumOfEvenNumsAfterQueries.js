https://leetcode.com/problems/sum-of-even-numbers-after-queries/

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
    
    let evenSums = [];
    let sum = 0;
    
    for(let num of nums){
        if(num % 2 === 0) sum+=num;
    }
    
    for(let q of queries){
        
        if(nums[q[1]] % 2 === 0){
            let prior = nums[q[1]];
            nums[q[1]] = nums[q[1]] + q[0];
            if(nums[q[1]] % 2 === 0){
                sum += q[0];
            } else {
                sum -= prior;
            }
        }
        else {
            nums[q[1]] = nums[q[1]] + q[0];
            if(nums[q[1]] % 2 === 0){
                sum += nums[q[1]];
            }
        }
        
        evenSums.push(sum);
    }
    
    return evenSums;
};