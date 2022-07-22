https://leetcode.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let unders = new ListNode();
    let overs = new ListNode();
    let undersPtr = unders;
    let oversPtr = overs;
    
    let runner = head;
    
    while(runner){
        if(runner.val < x){
            undersPtr.next = runner;
            undersPtr = undersPtr.next;
        } else {
            oversPtr.next = runner;
            oversPtr = oversPtr.next;
        }
        runner=runner.next;
    }
    oversPtr.next = null;
    undersPtr.next = overs.next;
    
    return unders.next;
};