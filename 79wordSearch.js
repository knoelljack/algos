https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let found = false;
    let rows = board.length;
    let cols = board[0].length;
    
    var search = function(x,y,index){
        if(x < 0 || y < 0 || x >= rows || y >= cols || board[x][y] !== word[index]) return false
        if(index == word.length-1) return true;
        board[x][y] = '*';
        
        if(search(x+1,y,index+1)) return true;
        if(search(x-1,y,index+1)) return true;
        if(search(x,y+1,index+1)) return true;
        if(search(x,y-1,index+1)) return true;
        
        board[x][y] = word[index];
        return false;
    }
    
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(search(i,j,0)) return true
        }
    }
    
    return false;
};