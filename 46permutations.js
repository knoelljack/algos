/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var permute = function(nums) {
//     let res = [];
//     let counter = {};
//     for(let num of nums){
//         counter[num] ? counter[num]++ : counter[num] = 1;
//     }
    
//     var backtrack = function(curr){
//         if(curr.length == nums.length){
//             res.push(curr.slice());
//             return;
//         } else {
//             for(let num in counter){
//                 if(counter[num] > 0){
//                     curr.push(num);
//                     counter[num]--;
//                     backtrack(curr);
//                     curr.pop();
//                     counter[num]++;
//                 } 
//             }
//         }
//     }
    
//     backtrack([]);
//     return res;
// };

var permute = function(nums) {
    let res = [];
    
    var dfs = function(i) {
        if(i == nums.length){
            res.push(nums.slice());
            return;
        }
        
        for(let j=i; j<nums.length; j++){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            dfs(i+1);
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    
    dfs(0);
    return res;
};
