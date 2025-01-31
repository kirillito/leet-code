/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    // moving elements to the beginning of array is too expensive
    // this is better be simulated using linked list
    let lst = new SinglyLinkedList();
    lst.generateNumbers(1, m);

    for (let i=0; i<queries.length; i++) {
        lst.unshift(lst.removeValue(queries[i]).val);
    }

    return lst.queriesResult;
};

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
        this.queriesResult = [];
        this.length = 0;
    }

    generateNumbers(from, to) {
        while (from <= to) {
            this.push(from);
            from++;
        }
    }

    push(val) {
        let newNode = new SinglyLinkedNode(val);
        
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

    unshift(val) {
        let newHead = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        }
        else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        
        return this;
    }

    removeValue(value) {
        let counter = 0;
        if (this.head.val === value) {
            let removed = this.head;
            this.head = this.head.next;
            this.length--;

            removed.next = null;
            this.queriesResult.push(counter);
            return removed;
        }
        
        let prev = null;
        let current = this.head;
        while (current && current.val !== value) {
            prev = current;
            current = current.next;
            counter++;
        }
        // value not found
        if (!current) {
            return null;
        }

        let removed = current;
        prev.next = removed.next;

        this.length--;

        removed.next = null;
        this.queriesResult.push(counter);
        return removed;
    }

}