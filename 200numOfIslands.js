/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let res = 0;
    let visited = new Array(grid.length);
    for(let i=0; i<visited.length; i++){
        visited[i] = new Array(grid[0].length).fill(false);
    }
    
    var dfs = function(x,y){
        if(x >= grid.length || y >= grid[0].length || x < 0 || y < 0 || visited[x][y]) return;
        else visited[x][y] = true;
        if(grid[x][y] == "0") return;
        if(grid[x][y] == "1") {
            grid[x][y] = "0";
            dfs(x+1,y);
            dfs(x-1,y);
            dfs(x,y+1);
            dfs(x,y-1);
        }
    }
    
    for(let j=0; j<grid.length; j++){
        for(let k=0; k<grid[0].length; k++){
            if(grid[j][k] == "1"){
                dfs(j,k);
                res++;
            } 
        }
    }
    
    return res
};