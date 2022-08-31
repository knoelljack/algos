https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    let rows = heights.length;
    let cols = heights[0].length;
    let pac = new Set();
    let atl = new Set();
    
    var dfs = (r,c,visited,prevHeight) => {
        let key = String(r)+','+String(c);
        if(r < 0 || c < 0 || r == rows || c == cols || visited.has(key) || prevHeight > heights[r][c]) return;
        visited.add(key);
        dfs(r+1,c,visited,heights[r][c]);
        dfs(r-1,c,visited,heights[r][c]);
        dfs(r,c+1,visited,heights[r][c]);
        dfs(r,c-1,visited,heights[r][c]);
    }
    
    for(let i=0; i<cols; i++){
        dfs(0,i,pac,heights[0][i]);
        dfs(rows-1,i,atl,heights[rows-1][i]);
    }
    for(let i=0; i<rows; i++){
        dfs(i,0,pac,heights[i][0]);
        dfs(i,cols-1,atl,heights[i][cols-1]);
    }
    
    let res = [];
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            let key = String(i)+','+String(j);
            if(pac.has(key) && atl.has(key)) res.push([i,j]);
        }
    }
    return res;
};