/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//TWO WAYS FIRST ITERATIVE SECOND RECURSIVELY

 var reverseString = function(s) {
    // let mid = s.length/2;
    // let end = s.length-1;
    // for(let i=0; i<mid; i++){
    //     [s[i],s[end-i]] = [s[end-i], s[i]]
    // }
    if(s.length == 1) return s;
    if(s.length == 0) return;
    let temp = s[0];
    s.shift();
    reverseString(s);
    s.push(temp);
};