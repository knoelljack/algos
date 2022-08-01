grid1 = [
    ['c', 'c', 't', 'n', 'a', 'x'],  
    ['c', 'c', 'a', 't', 'n', 'i'],   
    ['a', 'c', 'n', 'n', 't', 'p'],  
    ['t', 'n', 'i', 'i', 'p', 'p'],  
    ['a', 'o', 'o', 'p', 'a', 'a'],
    ['s', 'a', 'a', 'a', 'o', 'o'],
    ['k', 'a', 'i', 'o', 'k', 'i'],
]
word1 = "catnip"
word2 = "cccc"
word3 = "s"
word4 = "ant"
word5 = "aoi"
word6 = "ki"
word7 = "aaoo"
word8 = "ooo"


// grid2 = [['a']]
// word9 = "a"

// find_word_location(grid1, word1) => [ (1, 1), (1, 2), (1, 3), (2, 3), (3, 3), (3, 4) ]
// find_word_location(grid1, word2) =>
//        [ (0, 0), (1, 0), (1, 1), (2, 1),
//          (0, 0), (0, 1), (1, 1), (2, 1) ]
// find_word_location(grid1, word3) => [(5, 0)]
// find_word_location(grid1, word4) => [(0, 4), (1, 4), (2, 4)] OR [(0, 4), (1, 4), (1, 5)]
// find_word_location(grid1, word5) => [(4, 5), (5, 5), (6, 5)]
// find_word_location(grid1, word6) => [(6, 4), (6, 5)]
// find_word_location(grid1, word7) => [(5, 2), (5, 3), (5, 4), (5, 5)]
// find_word_location(grid1, word8) => [(4, 1), (4, 2), (4, 3)]
// find_word_location(grid2, word9) => [(0, 0)]

// Complexity analysis variables:

// r = number of rows
// c = number of columns
// w = length of the word

var findWord = function(grid,word){
    let res = [];
    let rows = grid.length;
    let cols = grid[0].length;

    var dfs = function(x,y,stack,index) {
        if(x < 0 || y < 0 || x >= rows || y >= cols || word[index] !== grid[x][y]) return;
        stack.push(String(x)+', '+String(y));
        let temp = grid[x][y];
        grid[x][y] = '*';
        if(index == word.length-1){
            res.push(stack.slice());
        }
        dfs(x+1,y,stack,index+1);
        dfs(x,y+1,stack,index+1);
        grid[x][y] = temp;
        stack.pop();
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            dfs(i,j,[],0);
        }
    }

    return res;
};

// console.log(findWord(grid1,word1));



// // Given list of words and a string, find if any word can be created from the string.

words = ["cat", "baby", "dog", "bird", "car", "ax"]
string1 = "tcabnihjs"
string2 = "tbcanihjs"
string3 = "baykkjl"
string4 = "bbabylkkj"
string5 = "ccc"
string6 = "breadmaking"

// find_embedded_word(words, string1) = cat
// find_embedded_word(words, string2) = cat
// find_embedded_word(words, string3) = None
// find_embedded_word(words, string4) = baby
// find_embedded_word(words, string5) = None
// find_embedded_word(words, string6) = bird

const find_embedded_word = function(words,string){
    let dict = {};
    for(let char of string){
        dict[char] ? dict[char]++ : dict[char] = 1;
    }

    const check = function(word,counts){
        for(let char of word){
            if(!counts[char] || counts[char] < 0) return false;
            counts[char]--;
        }
        return true;
    }

    for(let word of words){
        let copy = {
            ...dict,
        }
        if(check(word,copy)) return word;
    }
    return null;
}

console.log(find_embedded_word(words,string1));
console.log(find_embedded_word(words,string3));
console.log(find_embedded_word(words,string6));