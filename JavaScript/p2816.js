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
var doubleIt = function(head) {
    // reverse linked list
    let prev = null;
    let current = reverseList(head);;
    let next = null;
    let overflow = 0;

    // reverse list again adding (dequeuing) elements back, multiplying by 2 and saving overflow value
    while (current) {
        current.val = current.val*2 + overflow;
        overflow = Math.floor(current.val / 10);
        current.val %= 10;

        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

        if (current === null && overflow > 0) {
            current = new ListNode(overflow, prev);
            return current;
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