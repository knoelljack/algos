/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function (head) {
    let runner = head;
    let size = 0;
    while(runner){
        runner = runner.next;
        size++;
    }
    let mid;
    if(size%2 == 0) mid = Math.ceil(size/2);
    else mid = Math.ceil(size/2)-1;
    
    runner = head;
    for(let i=0; i<mid; i++){
        runner = runner.next;
    }
    return runner;
};