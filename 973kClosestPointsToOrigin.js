/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    return points.sort((a,b) => getDistance(a) - getDistance(b)).slice(0,k)
};

var getDistance = function(x) {
    return Math.pow(x[0],2) + Math.pow(x[1],2);
}