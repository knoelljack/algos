// 
// 

// Timestamp, User, Action
// 2020-01-21, nick, login 

// actions = login, logout, message


// log.hasNext() => true/bool
// log.next() => { timestamp: Date, user: "nick", action: "login" }

/**
 * 
 * 
 * 
 * nick login
 * nick login
 * nick logout
 * jack login
 * jack logout
 * nick logout
 * 
 */


 [{ max: 70, period: 4 }, { max: 50, period: 3}, { max: 30, period: 5}]

 [0, 1, 2, 3, 4, 5, 6, 7, 8]
 
 function getMaxPeriod(log) {
   let minHeap = new Heap(3, x => x.max);
 
   let currentPeriod = 0;
   let totalUsers = 0;
   let max = 0;
   let usersMap = new Map();
   
   //while our log has next check the next user to see if they are logged in or out
   while(log.hasNext()){
     let currUser = log.next();
 
     if (currUser.timestamp > currentPeriod) {
       minHeap.add({max: max, period: currentPeriod})
       max = 0;
       currentPeriod = currUser.timestamp;
     }
 
     //if logged in add to total
     if(currUser.action === "login"){
       if(usersMap.has(currUser.user)) {
         usersMap.set(currUser.user,usersMap.get(currUser.user)+1);
       } else {
         usersMap.set(currUser.user,1);
         totalUsers++;
       }
     } 
     //if logged out subtract from total
     else if(currUser.action === 'logout'){
       if(usersMap.has(currUser.user)){
         usersMap.set(currUser.user, usersMap.get(currUser.user)-1);
         if(usersMap.get(currUser.user) === 0){
           usersMap.delete(currUser.user);
           totalUsers--;
         }
       }
     } 
     max = Math.max(totalUsers,max);
   }
 
   //return total
   return minHeap.values();
 }
 
 function getMaxConcurrentUsers(log) {
   //have a running total variable to count our logged in users
   let totalUsers = 0;
   let max = 0;
   let usersMap = new Map();
   //while our log has next check the next user to see if they are logged in or out
   while(log.hasNext()){
     let currUser = log.next();
     //if logged in add to total
     if(currUser.action === "login"){
       if(usersMap.has(currUser.user)) {
         usersMap.set(currUser.user,usersMap.get(currUser.user)+1);
       } else {
         usersMap.set(currUser.user,1);
         totalUsers++;
       }
     } 
     //if logged out subtract from total
     else if(currUser.action === 'logout'){
       if(usersMap.has(currUser.user)){
         usersMap.set(currUser.user, usersMap.get(currUser.user)-1);
         if(usersMap.get(currUser.user) === 0){
           usersMap.delete(currUser.user);
           totalUsers--;
         }
       }
     } 
     max = Math.max(totalUsers,max);
   }
 
   //return total
   return max;
 }