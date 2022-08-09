https://leetcode.com/problems/binary-trees-with-factors/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var numFactoredBinaryTrees = function(arr) {
    let memo = new Map();
    let mod = 10**9 + 7;
    arr.sort((a,b)=>a-b);
    arr.forEach((num) => memo.set(num,1));
    
    for(let i=1; i<arr.length; i++){
        for(let j=i-1; j>=0; j--){
            if(arr[i] % arr[j]) continue;
            let num2 = arr[i]/arr[j];
            if(!memo.get(num2)) continue;
            let waysToGetFirst = memo.get(arr[j]);
            let waysToGetSecond = memo.get(num2);
            let totalWays = waysToGetFirst * waysToGetSecond;
            memo.set(arr[i],memo.get(arr[i]) + totalWays);
        }
    }
    
    return [...memo.values()].reduce((prev,curr) => prev+curr) % mod;
};