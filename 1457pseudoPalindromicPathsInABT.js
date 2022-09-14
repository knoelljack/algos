/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var pseudoPalindromicPaths  = function(root) {
    let counts = {}
    let res = 0;
    
    var dfs = (node) => {
        if(!node) return;
        counts[node.val] ? counts[node.val]++ : counts[node.val] = 1;
        if(!node.left && !node.right) isPalindrome(counts);
        dfs(node.left);
        dfs(node.right);
        counts[node.val]--;
    }
    
    var isPalindrome = (nums) => {
        let odds = 0;
        for(let key in nums){
            if(nums[key] % 2 != 0){
                odds++;
            }
        }
        if(odds == 0 || odds == 1) res++;
    }
    
    dfs(root)
    return res;
};

