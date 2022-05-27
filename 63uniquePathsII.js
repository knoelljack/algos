/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

 var uniquePathsWithObstacles = function(obstacleGrid) {
    let rows = obstacleGrid.length-1;
    let cols = obstacleGrid[0].length-1;
    if(obstacleGrid[rows][cols] == 1 || obstacleGrid[0][0] === 1) return 0;
    return checkPaths(obstacleGrid,0,0,{},rows,cols);
};

var checkPaths = function(grid,a,b,cache,width,height){
    if(a==width && b == height) return 1;
    if(a>width || b > height || grid[a][b] === 1) return 0;
    let key = String(a)+","+String(b);
    if(cache[key]) return cache[key];
    cache[key] = checkPaths(grid,a+1,b,cache,width,height) + checkPaths(grid,a,b+1,cache,width,height);
    return cache[key];
};