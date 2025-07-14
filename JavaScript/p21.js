/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = null;
    let current = null;

    while (list1 || list2) {
        if (list1 !== null && (list2 === null || list1.val <= list2.val)) {
            if (!head) {
                head = new ListNode(list1.val, null);
                current = head;
            } else {
                current.next = new ListNode(list1.val, null);
                current = current.next;
            }
            list1 = list1.next;
        } else {
            if (!head) {
                head = new ListNode(list2.val, null);
                current = head;
            } else {
                current.next = new ListNode(list2.val, null);
            current = current.next;
            }
            list2 = list2.next;
        }
    }

    return head;
};