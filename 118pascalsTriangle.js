/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [[1]];
    for(let i=0; i<numRows-1; i++){
        let prevRow = triangle[triangle.length-1];
        let newRow = [1];
        for(let j=1; j<prevRow.length; j++){
            newRow.push(prevRow[j] + prevRow[j-1]);
        }
        newRow.push(1);
        triangle.push(newRow);
    }
    return triangle;
};