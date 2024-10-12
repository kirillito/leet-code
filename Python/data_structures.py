#------------------------------
# Singly linked list
class SinglyLinkedNode:
    def __init__(self, value=None) -> None:
        self.value = value
        self.next: SinglyLinkedList = None

class SinglyLinkedList:
    def __init__(self) -> None:
        self.head: SinglyLinkedList = None
        self.tail: SinglyLinkedList = None
        self.length = 0

    def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.next

    # push new element to the end of the linked list
    def push(self, value):
        newNode = SinglyLinkedList(value)

        if (self.head is None):
            self.head = newNode
            self.tail = self.head
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        
        return self
        
    # pop element from the linked list tail
    def pop(self):
        # list is empty
        if (self.head is None):
            return None
        
        current = self.head
        newTail = current

        while (current.next is not None):
            newTail = current
            current = current.next
        
        self.tail = newTail
        self.tail.next = None
        self.length -= 1

        if (self.length == 0):
            self.head = None
            self.tail = None

        return current
    
    #def shift()
    #def unshift()
    #def get()
    #def set()
    #def insert()
    #def remove()
    #def reverse()
#------------------------------
# Doubly linked list
class DoublyLinkedNode:
    def __init__(self, value=None) -> None:
        self.value = value
        self.next: DoublyLinkedList = None
        self.previous: DoublyLinkedList = None

class DoublyLinkedList:
    def __init__(self) -> None:
        self.head: DoublyLinkedList = None
        self.tail: DoublyLinkedList = None
        self.length = 0
    
    #def push
    #def pop
    #def shift
    #def unshift
    #def get
    #def set
    #def insert
    #def remove
#------------------------------
# Stack
class StackNode:
    def __init__(self, value=None) -> None:
        self.value = value
        self.next: StackNode = None

class Stack:
    def __init__(self) -> None:
        self.first: StackNode = None
        self.last: StackNode = None
        self.size = 0
    
    #def push
    #def pop

#------------------------------
# Queue
class QueueNode:
    def __init__(self, value=None) -> None:
        self.value = value
        self.next: QueueNode = None

class Queue:
    def __init__(self) -> None:
        self.first: QueueNode = None
        self.last: QueueNode = None
        self.size = 0
    
    #def enqueue
    #def dequeue

#------------------------------
# Binary Search Tree
class BinarySearchTreeNode:
    def __init__(self, value=None) -> None:
        self.value = value
        self.left: BinarySearchTreeNode = None
        self.right: BinarySearchTreeNode = None

class BinarySearchTree:
    def __init__(self) -> None:
        self.root: BinarySearchTreeNode = None
