class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }

}


class LinkedList {
    constructor(headNode = null, tailNode = null) {
        this.headNode = headNode;
        this.length = 0;
        this.tailNode = tailNode;
    }

// remember to use recursion!!!

    append(value) {
    let newNode = new Node(value); // creates new node
    // let next = current.nextNode // sets next to the current node's next node

    if (!this.headNode) {
        this.headNode = newNode;
        // console.log(this.headNode)
        this.length += 1;
        return;
    }

    let current = this.headNode; // sets current node to headNode of linked list

    while (current.nextNode !== null) {
        // console.log(current.value)
        current = current.nextNode;
    }

    current.nextNode = newNode;
    this.tailNode = newNode
    console.log(current);
    this.length += 1

    }

    
    prepend(value) {
        let newNode = new Node(value)
    
        let currentNode = this.headNode
    
        if (this.headNode === null) {
            this.headNode = newNode
            this.length += 1;
        } else {
            this.headNode = newNode;
            this.headNode.nextNode = currentNode;
            this.length += 1;
        }
        console.log(newNode)
      }
    
    
    size() {
      console.log(this.length)
    }
    
    head() {
        console.log(this.headNode)
    }
    
    tail() {
        console.log(this.tailNode)
    }
    
    at(index) {
        let currentNode = this.headNode;

        for (let x = 0 ; x <= index ; x++) {
            currentNode = currentNode.nextNode;
        }

        console.log(currentNode.value)
    }
    
    pop() {
    
    }
    
    contains(value) {
    
    }
    
    find(value) {
    
    }
    
    toString() {
        let current = this.headNode
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