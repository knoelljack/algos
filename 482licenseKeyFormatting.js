https://leetcode.com/problems/license-key-formatting/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    s = s.split('-').join('').split('');
    
    for(let i=s.length-1-k; i>=0; i-=k){
        s[i] = s[i] + '-';
    }
    return s.join('').toUpperCase()
};