# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def deleteNode(self, node):
        node.val = node.next.val
        node.next = node.next.next
    
    def printList(self, node):
        while node != None:
            print(node.val)
            node = node.next
            
        print("========")
        return

head = ListNode(4)
head.next=ListNode(5)
head.next.next=ListNode(1)
head.next.next.next=ListNode(9)
s = Solution()
s.printList(head)
s.deleteNode(head.next)
s.printList(head)

head = ListNode(4)
head.next=ListNode(5)
head.next.next=ListNode(1)
head.next.next.next=ListNode(9)
s = Solution()
s.printList(head)
s.deleteNode(head.next.next)
s.printList(head)