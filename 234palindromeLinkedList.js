https://leetcode.com/problems/palindrome-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = reverse(slow.next);
    
    slow = slow.next;
    while(slow){
        if(head.val != slow.val) return false;
        slow = slow.next;
        head = head.next;
    }
    return true;
};

var reverse = function(node){
    let prev = null;
    while(node){
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
}