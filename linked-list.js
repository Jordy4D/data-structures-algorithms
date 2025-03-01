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
        const n = new Node(value)
        if (this.head === null) {
           this.head = n
        } else if (this.nextNode === null) {
          this.tail = n
        }
    
        this.length += 1
    }
    
    prepend(value) {
    
    }
    
    size() {
      console.log(this.length)
    }
    
    head() {
    
    }
    
    tail() {
    
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
        while (this.head !== null) {
          console.log(current)
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