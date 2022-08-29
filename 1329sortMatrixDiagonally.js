https://leetcode.com/problems/sort-the-matrix-diagonally/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
    let dict = {};
    
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            let d = j-i;
            if(!dict[d]){
                dict[d] = [];
            }
            dict[d].push(mat[i][j]);
        }
    }
    
    for(let key in dict){
        dict[key].sort((a,b) => a-b);
    }
    
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            let d = j-i;
            mat[i][j] = dict[d].shift();
        }
    }
    return mat;
};