/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let res = [];
    for(let interval of intervals){
        if(!newInterval || newInterval[0] > interval[1]) res.push(interval);
        else if(newInterval[1] < interval[0]){
            res.push(newInterval);
            newInterval = null;
            res.push(interval);
        } else {
            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1])
        }
    }
    if(newInterval) res.push(newInterval);
    return res;
};

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let res = [];
    let i=0;
    while(i < intervals.length && newInterval[0] > intervals[i][1]){
        res.push(intervals[i]);
        i++;
    }
    while(i < intervals.length && intervals[i][0] <= newInterval[1]){
        newInterval[0] = Math.min(intervals[i][0],newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1],newInterval[1]);
        i++;
    }
    
    res.push(newInterval);
    
    while(i < intervals.length){
        res.push(intervals[i]);
        i++;
    }
    return res;
    
};