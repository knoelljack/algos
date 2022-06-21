/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    let q = [];
    for(let i=0; i<mat.length; i++){
        for(let j=0; j<mat[0].length; j++){
            if(mat[i][j] === 0){
                q.push([i,j,0]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }
    let dir = [[0,1],[1,0],[-1,0],[0,-1]];
    while(q.length){
        let curr = q.shift();
        if(mat[curr[0]][curr[1]] > curr[2]){
            mat[curr[0]][curr[1]] = curr[2];
        }
        dir.forEach((d) => {
            let next = [curr[0]+d[0],curr[1]+d[1], curr[2]+1];
            if(next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length){
                if(mat[next[0]][next[1]] === Infinity){
                    q.push(next);
                }
            }
        })
    }
    return mat;
};