/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = 0;
    let currentA = headA;
    let lenB = 0;
    let currentB = headB;
    
    while (currentA !== null) {
        lenA += 1;
        currentA = currentA.next;
    }
    while (currentB !== null) {
        lenB += 1;
        currentB = currentB.next;
    }

    currentA = headA;
    currentB = headB;
    while (lenA > 0 && lenB > 0) {
        if (lenA > lenB) {
            currentA = currentA.next;
            lenA--;
        } else if (lenA < lenB) {
            currentB = currentB.next;
            lenB--;
        } else {
            if (currentA === currentB) {
                return currentA;
            }

            currentA = currentA.next;
            currentB = currentB.next;
            lenA--;
            lenB--;
        }
    }
    
    return null;
};