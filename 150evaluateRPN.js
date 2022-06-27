/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i=0; i<tokens.length; i++){
        if(tokens[i] == "*") {
            stack.push(stack.pop() * stack.pop());
        }
        else if(tokens[i] == "/") {
            let second = stack.pop();
            let first = stack.pop();
            let res = first/second;
            if(res >= 0){
                stack.push(Math.floor(first / second));
            } else {
                stack.push(Math.ceil(first / second));
            }
        }
        else if(tokens[i] == "+"){
            stack.push(stack.pop() + stack.pop());
        }
        else if(tokens[i] == "-"){
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        }
        else stack.push(Number(tokens[i]));
    }
    return stack[0];
};