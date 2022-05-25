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

//FIRST SOLUTION ITERATIVE && SECOND IS RECURSIVELY

 var reverseList = function(head) {
    // let prev = null;
    // while(head){
    //     let next = head.next
    //     head.next = prev
    //     prev = head
    //     head = next;
    // }
    // return prev
    
    if(!head || !head.next) return head;
    let tail = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return tail;
};