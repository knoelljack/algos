/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let count = 0;
    let runner = head;
    while(runner.next){
        runner = runner.next;
        count++;
    }
    let target = head;
    if(n == count+1) return head.next;
    for(let i=0; i<count-n; i++){
        target = target.next;
    }
    target.next = target.next.next;
    return head
};