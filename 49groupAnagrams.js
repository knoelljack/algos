/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let dict = {};
    for(let str of strs){
        let letters = str.split('').sort().join('');
        dict[letters] ? dict[letters].push(str) : dict[letters] = [str];
    }
    
    return Object.values(dict);
};