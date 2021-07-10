class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }

    enqueue(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.front = this.back = node;
        }
        else {
            this.back.next = node;
            this.back = node;
        }
        
        this.print();
    }

    dequeue() {
        const node = this.front;

        if(!this.isEmpty()) {
            this.front = this.front.next;
        }

        if(this.front) {
            this.back = null;
        }

        this.print();

        return node;
    }

    print() {

        if(this.isEmpty()) {
            console.log('empty queue!');
        }
        else {
            const list = [];
            let currentNode = this.front;

            while(currentNode) {
                list.push(currentNode.value);

                currentNode = currentNode.next;
            }

            console.log(list);
        }
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.dequeue();
queue.dequeue();