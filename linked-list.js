class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }

}


class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.length = 0;
        this.tail = tail;
    }

// remember to use recursion!!!

    append(value) {
    let newNode = new Node(value); // creates new node
    // let next = current.nextNode // sets next to the current node's next node

    if (!this.head) {
        this.head = newNode;
        // console.log(this.head)
        this.length += 1;
        return;
    }

    let current = this.head; // sets current node to head of linked list

    while (current.nextNode !== null) {
        // console.log(current.value)
        current = current.nextNode;
    }

    current.nextNode = newNode;
    this.tail = newNode
    console.log(current);
    this.length += 1

    }

    
    prepend(value) {
        let newNode = new Node(value)
    
        let currentNode = this.head
    
        if (this.head === null) {
            this.head = newNode
            this.length += 1;
        } else {
            this.head = newNode;
            this.head.nextNode = currentNode;
            this.length += 1;
        }
        console.log(newNode)
      }
    
    
    size() {
      console.log(this.length)
    }
    
    head() {
        console.log(this.head)
    }
    
    tail() {
        console.log(this.tail)
    }
    
    at(index) {
    
    }
    
    pop() {
    
    }
    
    contains(value) {
    
    }
    
    find(value) {
    
    }
    
    toString() {
        let current = this.head
        while (current.nextNode !== null) {
          console.log(`( ${current.value} ) ->`)
          current = current.nextNode
        }
    }

}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list)

console.log(list.size());
console.log(list.toString());