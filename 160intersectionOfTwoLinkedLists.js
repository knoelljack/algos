/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let ptrA = headA;
    let countA = 0;
    let ptrB = headB;
    let countB = 0;
    while(ptrA){
        ptrA = ptrA.next;
        countA++;
    }
    while(ptrB){
        ptrB = ptrB.next;
        countB++;
    }
    ptrA = headA;
    ptrB = headB;
    if(countA > countB){
        for(let i=0; i<countA-countB; i++){
            ptrA = ptrA.next;
        }
    }
    else {
        for(let j=0; j<countB-countA; j++){
            ptrB = ptrB.next;
        }
    }
    while(ptrA && ptrB){
        if(ptrA === ptrB) return ptrA;
        ptrA = ptrA.next;
        ptrB = ptrB.next;
    }
    return null;
    // let ptr1 = headA;
    // let ptr2 = headB;
    // while(ptr1 !== ptr2){
    //     ptr1 = !ptr1 ? headB : ptr1.next;
    //     ptr2 = !ptr2 ? headA : ptr2.next;
    // }
    // return ptr1;
};