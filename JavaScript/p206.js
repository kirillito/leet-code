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
var reverseList = function(head) {
    if (!head) return head;

    let current = head;
    let nextNode = current.next;
    let prevNode = null;

    while (nextNode) {
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
        nextNode = current.next;
    }
    current.next = prevNode;
    
    return current;
};