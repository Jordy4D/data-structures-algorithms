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
    const n = new Node(value) // creates new node
    let current = this.head; // sets current node to head of linked list
    let next = current.nextNode // sets next to the current node's next node
    
    if (this.head === null) {
      this.head = n
      next = null
    } else if (next !== null) {
      current = next
    }
    // if (current.nextNode !== null) {
    //   current = n.nextNode 
    // }

    console.log(n)
    console.log(this.head)

    // if (value.nextNode === null) {
    //    this.head = n
    // }

    // while (current.nextNode !== null) {
    //   current = current.nextNode
    //   console.log(n)
      
    // }

    // } else {
    //   this.nextNode = n
    // } 

    

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