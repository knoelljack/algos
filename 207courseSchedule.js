https://leetcode.com/problems/course-schedule/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let map = {};
    let visited = new Set();
    
    for(let i=0; i<numCourses; i++){
        map[i] = [];
    }
    for(let p of prerequisites){
        map[p[0]].push(p[1]);
    }
    // console.log(map);
    
    var dfs = (crs) => {
        if(visited.has(crs)) return false;
        if(map[crs] == []) return true;
        
        visited.add(crs);
        
        for(let i=0; i<map[crs].length; i++){
            if(!dfs(map[crs][i])) return false;
        }
        visited.delete(crs);
        map[crs] = [];
        return true;
    }
    
    for(let i=0; i<numCourses; i++){
        if(!dfs(i)) return false;
    }
    return true;
};