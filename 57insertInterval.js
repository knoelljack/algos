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