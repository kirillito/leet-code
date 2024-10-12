class SinglyLinkedNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
    
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new SinglyLinkedNode(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }        
        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        var current = this.head;
        var newTail = current;
        
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }        
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        
        if (this.length === 0) {
            this.tail = null;
        }     
        return currentHead;
    }

    unshift(val) {
        var newHead = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        
        return this;
    }

    get(index) {
        if (index < 0 || index>=this.length)
            return null;

        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value) {
        var foundNode = this.get(index);
        
        if (foundNode) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index>this.length)
            return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        
        var prevNode = this.get(index-1);
        
        var newNode = new SinglyLinkedNode(value);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index, value) {
        if (index < 0 || index>this.length)
            return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        
        var prevNode = this.get(index-1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;

        removed.next = null;
        return removed;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var next;
        var prev = null;
        for (var i=0; i<this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}
    
class DoublyLinkedNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new DoublyLinkedNode(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.previous = this.tail;
            this.tail.next = newNode;            
            this.tail = newNode;
        }        
        this.length++;

        return this;
    }

    pop() {
        if (!this.head) return undefined;

        var poppedTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedTail.previous;
            this.tail.next = null;
            poppedTail.previous = null;
        }
        this.length--;
       
        return poppedTail;
    }

    shift() {
        if (!this.head) return undefined;

        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.previous = null;
            oldHead.next = null;
        }
        this.length--;
        
        return oldHead;
    }

    unshift(val) {
        var newHead = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newHead.next = this.head;
            this.head.previous = newHead;
            this.head = newHead;
        }
        this.length++;
        
        return this;
    }

    get(index) {
        if (index < 0 || index>=this.length)
            return null;

        if (index <= this.length/2) {
            var counter = 0;
            var current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            var counter = this.length-1;
            var current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }

        return current;
    }

    set(index, value) {
        var foundNode = this.get(index);
        
        if (foundNode) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index>this.length)
            return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        
        var prevNode = this.get(index-1);
        var nextNode = prevNode.next;
        
        var newNode = new DoublyLinkedNode(value);
        newNode.next = nextNode;
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index, value) {
        if (index < 0 || index>this.length)
            return undefined;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();
        
        var prevNode = this.get(index-1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        prevNode.next.prev = prevNode;
        this.length--;

        removed.prev = null;
        removed.next = null;
        return removed;
    }
}

class StackNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new StackNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var tmp = this.first;
            this.first = newNode;
            this.first.next = tmp;
        }
        return ++this.size;        
    }

    pop() {
        if (!this.first) return null;
        var tmp = this.first;
        
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return tmp.value;
    }
}

class QueueNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new QueueNode(val);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        var tmp = this.first;
        
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return tmp.value;
    }
}

class BinarySearchTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new BinarySearchTreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if (val < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (val > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                } else
                    return undefined;
            }
        }        
        
        return this;
    }

    contains(val) {
        if (!this.root) return false;
        
        let current = this.root;
        let found = false;
        while(current && !found) {
            if (val < current.value) {
                current = current.left;
            } else if (val > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    BFS() {
        let visited = [];
        let queue = [];
        let current = this.root;
        queue.push(current);

        while (queue.length) {
            current = queue.shift();
            visited.push(current.value);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return visted;
    }

    DFS_PreOrder() {
        let visited = [];

        function traverse(node) {
            visited.push(node.value);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return visited;
    }

    DFS_PostOrder() {
        let visited = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            visited.push(node.value);
        }
        traverse(this.root);
        return visited;
    }

    DFS_InOrder() {
        let visited = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            visited.push(node.value);
            if (node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return visited;
    }
}

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if (element <= parent) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    removeRoot() {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
  
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = leftChildIndex + 1;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element)
                    || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

class PriorityQueueNode {
    constructor(val, priority) {
        this.value = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new PriorityQueueNode(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1)/2);
            let parent = this.values[parentIndex];
            if (element.priority >= parent.priority) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
  
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = leftChildIndex + 1;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild.priority < element.priority)
                    || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i=0; i<Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i=0; i<this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keysArr = [];

        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; i<this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);                        
                    }
                }
            }
        }
        
        return keysArr;
    }

    values() {
        let valuesArr = [];

        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; i<this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);                        
                    }
                }
            }
        }
        
        return valuesArr;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;

        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    DFS_Recursive(start) {
        const visited = {};
        const result = [];
        const visitVertex = function (vertex) {
            if (!vertex || visited[vertex]) return null;
            traverseOrder.push(vertex);
            visited[vertex] = true;
        }
        visitVertex(start);
    }
}

//var list = new SinglyLinkedList();