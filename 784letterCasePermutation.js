https://leetcode.com/problems/letter-case-permutation/

/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(str) {
    permutations = [];
  
  var dfs = function(i,curr){
    if(i == str.length){
      permutations.push(curr.slice());
      return;
    }
      if(isNaN(str[i])){
          dfs(i+1,curr+str[i].toUpperCase());
          dfs(i+1,curr+str[i].toLowerCase());
      } else {
          dfs(i+1,curr+str[i]);
      }
      
    
  }

  dfs(0,'');
  return permutations;
};