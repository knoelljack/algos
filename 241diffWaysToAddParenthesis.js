https://leetcode.com/problems/different-ways-to-add-parentheses/

/**
 * @param {string} expression
 * @return {number[]}
 */
 var diffWaysToCompute = function(expression) {
    let res = [];
    if(!(expression.includes('+')) && !(expression.includes('-')) && !(expression.includes('*'))){
        res.push(parseInt(expression));
    } else {
        for(let i=0; i<expression.length; i++){
            let char = expression[i];
            if(isNaN(parseInt(char,10))){
                let leftParts = diffWaysToCompute(expression.substring(0,i));
                let rightParts = diffWaysToCompute(expression.substring(i+1));
                for(let j=0; j<leftParts.length; j++){
                    let left = leftParts[j];
                    for(let k=0; k<rightParts.length; k++){
                        let right = rightParts[k];
                        if(char === '+') res.push(left+right);
                        else if(char === '-') res.push(left-right);
                        else if(char === '*') res.push(left*right);
                    }
                }
            }
        }
    }
    return res;
};