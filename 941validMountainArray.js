/**
 * @param {number[]} arr
 * @return {boolean}
 */
//TWO POINTERS APPROACH
 var validMountainArray = function(arr) {
    let i=0;
    let end=arr.length;
    while(i+1<end && arr[i]<arr[i+1]){
        i++;
    }
    if(i==0 || i==end-1) return false;
    while(i+1<end && arr[i]>arr[i+1]){
        i++;
    }
    return i == end-1
};

//FLAG APPROACH
var validMountainArray = function(arr) {
    if(arr.length == 1) return false;
    let end = arr.length-1;
    let flag = false;
    for(let i=0; i<arr.length-1; i++){
        if(arr[1]<arr[0] || arr[end] > arr[end-1]) return false;
        if(arr[i+1]==arr[i]) return false;
        if(flag && arr[i+1]>=arr[i]) return false;
        if(arr[i+1]<arr[i]) flag = true;
    }
    return true;
};