https://leetcode.com/problems/minimum-index-sum-of-two-lists/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let map = new Map();
    list1.forEach((item,idx) => {
        map.set(item,idx);
    })
    let min = Infinity;
    let ans = [];
    
    list2.forEach((item,idx) => {
        if(map.has(item)){
            let sum = map.get(item) + idx;
            if(min == sum) ans.push(item);
            else if(min > sum){
                ans = [item]
                min = sum;
            }
        }
    })
    
    return ans;
};