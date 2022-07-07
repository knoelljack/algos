/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(left == right) return head;
    let curr = head;
    let prev = null;
    
    for(let i=1; i<left; i++){
        prev = curr;
        curr = curr.next;
    }
    
    let beforeSubList = prev;
    let endOfSubList = curr;
    let i = 0;
    
    while(curr && i < right-left+1){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        i++;
    }
    
    if(beforeSubList !== null){
        beforeSubList.next = prev;
    } else {
        head = prev;
    }
    endOfSubList.next = curr;
    
    return head;
};