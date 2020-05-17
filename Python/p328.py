# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def printList(self, head: ListNode):
        node = head
        while node != None:
            print(node.val)
            node = node.next
            
        print("========")
        return

    def oddEvenList(self, head: ListNode) -> ListNode:
        if (head == None or head.next == None or head.next.next == None):
            return head
            
        switch = head
        index = 1
        evenHead = head.next
        evenTail = head.next
        
        node = head
        while node.next != None:
            node = node.next
            index += 1

            if index % 2 == 0:
                evenTail = node

            if index % 2 > 0:
                switch.next = node
                switch = switch.next

                node = evenTail
                evenTail.next = switch.next
                switch.next = evenHead

            # print("index: ", index)
            # self.printList(head)

        return head

        
s = Solution()        
res = s.oddEvenList(ListNode(1,ListNode(2,ListNode(3,ListNode(4,ListNode(5,None))))))
s.printList(res)

res = s.oddEvenList(ListNode(2,ListNode(1,ListNode(3,ListNode(5,ListNode(6,ListNode(4,ListNode(7,None))))))))
s.printList(res)

res = s.oddEvenList(None)
s.printList(res)

