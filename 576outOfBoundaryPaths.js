https://leetcode.com/problems/out-of-boundary-paths/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
 var findPaths = function(m, n, maxMove, startRow, startColumn) {
    let cache = {};
    let mod = (Math.pow(10,9)+7)
    
    var search = function(x,y,availMoves){
        let key = String(x)+','+String(y)+','+String(availMoves);
        if(key in cache) return cache[key];
        if(availMoves < 0) return 0;
        if(x >= m || y >= n || x < 0 || y < 0){
            return 1;
        }
        
        let up = search(x+1,y,availMoves-1) % mod;
        let down = search(x-1,y,availMoves-1) % mod;
        let right = search(x,y+1,availMoves-1) % mod;
        let left = search(x,y-1,availMoves-1) % mod;
        
        cache[key] = up+down+right+left;
        return cache[key];
    }
    
    let totalPaths = search(startRow,startColumn,maxMove) % mod;
        
    return totalPaths;
};