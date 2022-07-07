/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    if(k<2 || head == null) return head;
    let curr = head;
    let prev = null;
    //outer loop for repeated process until you reach end of list (curr == null)
    while(true){
        //starting pointers for each round
        let i = 0;
        let lastNodeFromPrev = prev;
        let lastNodeInSub = curr;
        let remaining = curr;
        let remainCount = 0;
        while(remaining){
            remaining = remaining.next;
            remainCount++;
        }
        if(remainCount < k) break;
        //reversing k nodes in the list
        while(curr && i < k){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            i++;
        }
        //check if the lastNodeFromPrev is null or not for head of list or not
        if(lastNodeFromPrev !== null){
            //if it exists set it to prev as that will not be the first node in the sublist that was reversed
            lastNodeFromPrev.next = prev;
        } else {
            //set head to prev as that is the beginning of your new list
            head = prev;
        }
        //reset our last Node in sub.next for our next iteration of the loop
        lastNodeInSub.next = curr;
        //if our curr is null we know we are at the end of the list, so we can break out of our loop
        if(curr == null) break;
        //set out previous to the last node in the sublist
        prev = lastNodeInSub;
        
    }
    return head;
};