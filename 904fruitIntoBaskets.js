https://leetcode.com/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    let types = {};
    let start = 0;
    let max = 0;
    for(let end=0; end<fruits.length; end++){
        types[fruits[end]] ? types[fruits[end]]++ : types[fruits[end]] = 1;
        while(Object.keys(types).length > 2){
            types[fruits[start]]--;
            if(types[fruits[start]] === 0) delete types[fruits[start]];
            start++;
        }
        max = Math.max(max,end-start+1);
    }
    return max;
};