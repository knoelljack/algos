/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let cycleLength = 0;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast) {
            cycleLength = getCycleLength(head,slow,fast);
            break;
        }
    }
    return cycleLength === 0 ? null : getBeginOfCycle(head,cycleLength);
};

var getCycleLength = function(head,slow,fast){
    let length = 0;
    while(true){
        fast=fast.next;
        if(fast == null) return 0;
        length++;
        if(fast == slow) break;
    }
    return length;
};

var getBeginOfCycle = function(head,cycleLength){
    let ptr1 = head;
    let ptr2 = head;
    while(cycleLength > 0){
        ptr2 = ptr2.next;
        cycleLength--;
    }
    while(ptr1 !== ptr2){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
}

