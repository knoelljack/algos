https://leetcode.com/problems/richest-customer-wealth/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    for(let c of accounts){
        let temp = 0;
        for(let i=0; i<c.length; i++){
            temp += c[i];
        }
        if(temp > max) max = temp;
    }
    return max;
};