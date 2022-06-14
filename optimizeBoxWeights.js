/*
Example:
n=5
arr=[3,7,5,6,2]
There are 2 subsets in arr that satisfy the conditions for A are [5,7] and [6,7];
*/

var optimizeBoxWeights = function(arr){
    arr.sort();
    let totalSum = 0;
    for(let num of arr){
        totalSum+=num;
    }
    let end = arr.length-1;
    let currSum = arr[end];
    while(currSum <= totalSum - currSum){
        currSum+=arr[end-1];
        end--;
    }
    return arr.slice(end);
}

let test1 = [3,7,5,6,2];
let test2 = [1,3,4,9];
let test3 = [1,2];
let test4 = [1,8,5,3,6,7];

// console.log(optimizeBoxWeights(test1));
// console.log(optimizeBoxWeights(test2));
// console.log(optimizeBoxWeights(test3));
console.log(optimizeBoxWeights(test4));