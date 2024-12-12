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
var insertGreatestCommonDivisors = function(head) {
    let current = head;
    while (current.next) {
        let newNode = new ListNode(getGCD(current.val, current.next.val), current.next);
        current.next = newNode;
        current = current.next.next;
    }
    
    return head;
};

var getGCD = function(x, y) {
    while (x % y !== 0) {
        if (y > x) {
            let tmp = x;
            x = y;
            y = tmp;
        }
        x = x%y;
    }
    return y;
}