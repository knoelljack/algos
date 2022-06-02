/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let ans = [];
    for(let i=0; i<matrix[0].length; i++){
        let curr = [];
        for(let j=0; j<matrix.length; j++){
            curr.push(matrix[j][i]);
        }
        ans.push(curr);
    }
    return ans
};