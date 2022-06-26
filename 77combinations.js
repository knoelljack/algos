/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let ans = [];
    
    var backtrack = function(start,comb){
        if(comb.length == k){
            ans.push(Array.from(comb));
            return;
        }
        for(let i=start; i<=n; i++){
            comb.push(i);
            backtrack(i+1,comb);
            comb.pop();
        }
    }
    backtrack(1,[]);
    
    return ans;
};