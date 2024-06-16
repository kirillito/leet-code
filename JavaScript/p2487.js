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
var removeNodes = function(head) {
    let reversedList = reverseList(head);
    head = reversedList;
    let currentMax = head.val;
    let prev = null;
    let current = head;
    let next = null;

    // reverse list again skipping smaller values
    while (current) {
        if (current.val>=currentMax) {
            currentMax = current.val;
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        } else {
            current = current.next;
        }
    }

    return prev;
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