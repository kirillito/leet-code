/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // reverse linked list
    let res = null;
    let overflow = 0;

    while (l1 || l2) {
        let newVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + overflow;
        overflow = Math.floor(newVal /10);
        newVal %= 10;
        res = new ListNode(newVal, res);
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    if (overflow) {
        res = new ListNode(1, res);
    }

    return reverseList(res);

};

var reverseList = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}