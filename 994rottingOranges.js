/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let q = [];
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === 2) q.push([i,j,0]);
        }
    }
    let dir = [[0,1],[1,0],[0,-1],[-1,0]];
    let count = 0;
    while(q.length){
        let curr = q.shift();
        dir.forEach((d) => {
            let x = curr[0]+d[0];
            let y = curr[1]+d[1];
            let level = curr[2];
            if(level > count) count = level;
            if(x > -1 && x < grid.length && y > -1 && y < grid[0].length){
                if(grid[x][y] === 1) {
                    q.push([x,y,level+1]);
                    grid[x][y] = 2;
                }
            }
        })
    }
    for(let row of grid){
        if(row.includes(1)) return -1;
    }
    return count >= 0 ? count : -1;
};