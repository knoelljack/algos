/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(heights) {
    let left = 0;
    let right = heights.length-1;
    let max = 0;
    let area;
    while(left<right){
        if(heights[left]>=heights[right]){
            area = heights[right]*(right-left);
            right--;
        } else {
            area = heights[left]*(right-left);
            left++;
        }
        if(area>max) max = area;
    }
    return max;
};