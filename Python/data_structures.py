# ------------------------------
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
        new_node = SinglyLinkedNode(value)

        if self.head is None:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1

        return self

    # pop element from the linked list tail
    def pop(self):
        # list is empty
        if self.head is None:
            return None

        current = self.head
        new_tail = current

        while current.next is not None:
            new_tail = current
            current = current.next

        self.tail = new_tail
        self.tail.next = None
        self.length -= 1

        if self.length == 0:
            self.head = None
            self.tail = None

        return current

    # shifts the element from the beginning of the list
    def shift(self):
        if self.head is None:
            return None

        current_head = self.head
        self.head = current_head.next
        self.length -= 1

        if self.length == 0:
            self.tail = None

        return current_head

    # unshifts the element to the beginning of the list
    def unshift(self, value):
        newHead = SinglyLinkedNode(value)

        if self.head is None:
            self.head = newHead
            self.tail = newHead
        else:
            newHead.next = self.head
            self.head = newHead
        self.length += 1

        return self

    # get element at index position
    def get(self, index):
        if index < 0 or index >= self.length:
            return None

        counter = 0
        current = self.head

        while counter != index:
            current = current.next
            counter += 1

        return current

    # sets the linked list element value at the index position
    def set(self, index, value):
        found_node = self.get(index)

        if found_node is not None:
            found_node.value = value
            return True

        return False

    # inserts new element into linked list at index position
    # def insert(self, index, value):
    #     if index < 0 or index >= self.length:
    #         return False
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
