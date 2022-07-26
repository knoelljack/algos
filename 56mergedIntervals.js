https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0]);
    let merged = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    
    for(let i=1; i<intervals.length; i++){
        let curr = intervals[i];
        if(end >= curr[0]){
            end = Math.max(end,curr[1])
        } else {
            merged.push([start,end])
            start = curr[0];
            end = curr[1];
        }
    }
    merged.push([start,end]);
    return merged;
};