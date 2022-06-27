/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let res = [];
    let counter = {};
    for(let num of nums){
        counter[num] ? counter[num]++ : counter[num] = 1;
    }
    
    var backtrack = function(curr){
        if(curr.length == nums.length){
            res.push(curr.slice());
            return;
        }
        for(let num in counter){
            if(counter[num] > 0){
                curr.push(num);
                counter[num]--;
                backtrack(curr);
                curr.pop();
                counter[num]++;
            }
        }
    }
    backtrack([]);
    return res;
};