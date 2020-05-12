# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        res = 0
        node = head
        
        while node != None:
            res <<= 1
            res += node.val
            node = node.next
        
        return res

s = Solution()        
print(s.getDecimalValue(ListNode(1,ListNode(0,ListNode(1,None))) ))
print(s.getDecimalValue(ListNode(0,None)))
print(s.getDecimalValue(ListNode(1,None)))
print(s.getDecimalValue(ListNode(1,ListNode(0,ListNode(0,ListNode(1,ListNode(0,ListNode(0,ListNode(1,ListNode(1,ListNode(1,ListNode(0,ListNode(0,ListNode(0,ListNode(0,ListNode(0,ListNode(0,None)))))))))))))))))
print(s.getDecimalValue(ListNode(0,ListNode(0,None))))