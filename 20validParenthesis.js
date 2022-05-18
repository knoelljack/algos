/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let legend = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    let stack = [];
    for(char of s){
        if(legend[char]) stack.push(char);
        else if(legend[stack.pop(char)]!==char) return false
    }
    
    return stack.length == 0;
};