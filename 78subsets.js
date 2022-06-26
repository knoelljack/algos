/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let ans = [];
    let subset = [];
    var dfs = function(i) {
        if(i >= nums.length){
            ans.push(Array.from(subset));
            return;
        }
        subset.push(nums[i]);
        dfs(i+1);
        
        subset.pop();
        dfs(i+1);
    }
    dfs(0);
    return ans;
};