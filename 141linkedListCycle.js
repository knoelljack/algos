/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // let map = new Map();
    // let runner = head;
    // while(runner && runner.next){
    //     if(map.has(runner)) return true;
    //     else {
    //         map.set(runner,1);
    //         runner = runner.next;
    //     }
    // }
    // return false;
    let ptr1 = head
    let ptr2 = head
    while(ptr2 && ptr2.next && ptr2.next.next){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next
        if(ptr1==ptr2) return true
    }
    return false
};