https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    if(!head) return head;
    let second = split(head);
    second = reverse(second);
    return merge(head,second);
};

var split = function(node){
    let slow = node;
    let fast = node;
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let secondHalf = slow.next;
    slow.next = null;
    return secondHalf;
};

var reverse = function(node){
    let curr = node;
    let prev = null;
    
    while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

var merge = function(l1,l2){
    while(l2){
        let next1 = l1.next;
        let next2 = l2.next;
        l1.next = l2;
        l2.next = next1;
        l1 = next1;
        l2 = next2;
    }
}