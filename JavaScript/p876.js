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
var middleNode = function(head) {
    let mid = head;
    let isMid = false;;
    let current = head;

    while (current.next !== null) {
        current = current.next;
        if (!isMid) {
            mid = mid.next;
            isMid = true;
        } else {
            isMid = false;
        }
    }

    return mid;
};