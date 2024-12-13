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
var mergeNodes = function(head) {
    let current = head;

    while (current.next) {
        if (current.next.val !== 0) {
            current.val += current.next.val;
            current.next = current.next.next;
        } else {
            // check for the end of the list
            if (current.next.next) {
                current = current.next;
            } else {
                current.next = null;
            }
        }
    }

    return head;
};