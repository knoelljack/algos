/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1]);
    let maxUnits = 0;
    for(let box of boxTypes){
        while(box[0] > 0 && truckSize > 0){
            maxUnits+=box[1];
            truckSize -= 1;
            box[0]--;
        }
    }
    return maxUnits;
};