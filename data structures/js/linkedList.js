class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
​
    append(value) {
        const newNode = { value, next: null };
​
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }
​
    prepend(value) {
        const newNode = { value, next: this.head };
​
        this.head = newNode;
        
        if (!this.tail) {
            this.tail = newNode;
        }
    }
​
    delete(value) {
        if (!this.head) {
            return null;
        }
​
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
​
        let currentNode = this.head;
​
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
            }
            else {
                currentNode = currentNode.next
            }
        }
​
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }
​
    find(value) {
        let currentNode = this.head;
​
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode
            }
​
            currentNode = currentNode.next;
        }
​
        return null;
    }
​
    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);
​
        if (existingNode) {
            const newNode = { value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }
​
    toArray() {
        const nodes = [];
​
        let currentNode = this.head;
​
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
​
        return nodes;
    }
}
​
const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.append(4);
linkedList1.append(5);
​
linkedList1.prepend(50);
​
linkedList1.delete(1);
linkedList1.delete(2);
​
linkedList1.insertAfter("Rudolf Gabrielyan", 4);
​
console.log(linkedList1.toArray());
console.log(linkedList1.find(3));
console.log(linkedList1.find(300));