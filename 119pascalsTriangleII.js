https://leetcode.com/problems/pascals-triangle-ii/submissions/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let row = [1];
    for(let i=0; i<=rowIndex; i++){
        row[i] = 1;
        for(let j=i-1; j>0; j--){
            row[j] = row[j-1]+row[j]
        }
    }
    return row
    // if(rowIndex === 0) return [1];
    // if(rowIndex > 0) {
    //     let curr= [1];
    //     let prev = getRow(rowIndex-1);
    //     for(let i=1; i<rowIndex; i++){
    //         curr[i] = prev[i-1]+prev[i];
    //     }
    //     curr.push(1);
    //     return curr;
    // }
};