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
 var swapPairs = function(head) {
    if(!head) return head;
    if(!head.next) return head;
    let newList = new ListNode(head.next.val,head)
    newList.next.next = head.next.next ? swapPairs(head.next.next) : null;
    return newList;
};
