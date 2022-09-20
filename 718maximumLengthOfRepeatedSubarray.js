https://leetcode.com/problems/maximum-length-of-repeated-subarray/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let x, y;
    let res = 0;
    
    for(let i=0; i<n-res; i++){
        x = i;
        for(let j=0; j<m-res; j++){
            y = j;
            while(x<n && y<m && nums1[x] === nums2[y]){
                x++;
                y++;
            }
            res = Math.max(res,x-i);
            x = i;
        }
    }
    
    return res;
};