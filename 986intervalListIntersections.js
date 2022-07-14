https://leetcode.com/problems/interval-list-intersections/

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    let ptr1 = 0;
    let ptr2 = 0;
    let intersections = [];
    while(ptr1 < firstList.length && ptr2 < secondList.length){
        let first = firstList[ptr1];
        let second = secondList[ptr2];
        if(overLaps(first,second)){
            intersections.push([Math.max(first[0],second[0]), Math.min(first[1],second[1])])
        }
        if(first[1] <= second [1]) {
            ptr1++;
        } else {
            ptr2++;
        }
    }
    return intersections;
};

var overLaps = function(a,b){
    if(a[1] >= b[0] && a[0] <= b[1]) {
        return true;
    }
    return false;
}