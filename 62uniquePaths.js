/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    // let grid = new Array(m).fill(0).map(() => new Array(n).fill(-1));
    // const grid = new Array(m);
    // for(let i=0; i<grid.length; i++){
    //     grid[i]= new Array(n).fill(-1);
    // }
    // const dict = {};
    var checkPaths = function(i,j,cache) {
        if(i>m-1 || j>n-1) return 0;
        if(i===m-1 && j===n-1) return 1;
        let key = String(i)+","+String(j);
        if(cache[key]) return cache[key];
        // if(cache[i][j] !== -1) return cache[i][j];
        cache[key] = checkPaths(i+1,j,cache) + checkPaths(i,j+1,cache);
        // cache[i][j] = checkPaths(i+1,j,cache) + checkPaths(i,j+1,cache);
        // return cache[i][j];  
        return cache[key]
    }
    return checkPaths(0,0,{});
};