/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let end = arr.length-1;
    let max = 0;
    for(let i=end; i>=0; i--){
        let curr = arr[i];
        arr[i] = max;
        max = max > curr ? max : curr;
    }
    arr[end]=-1;
    return arr;
};