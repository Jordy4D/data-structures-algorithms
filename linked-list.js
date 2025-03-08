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


    append(value) {
    let newNode = new Node(value); 

    if (!this.headNode) {
        this.headNode = newNode;
        this.length += 1;
        return;
    }

    let current = this.headNode; 

    while (current.nextNode !== null) {
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
        console.log(`at(index) headnode value is: ${currentNode.value}`)

        for (let x = 0 ; x < index ; x++) {
            currentNode = currentNode.nextNode;
        }

        console.log(currentNode.value)
    }
    
    pop() {
        let current = this.headNode
    
        if (current === null) {
          return console.log("No nodes to remove")
        } else if (current.nextNode === null) {
          this.headNode = null
        }
    
        while (current.nextNode.nextNode !== null) {
          current = current.nextNode;
        }
    
        current.nextNode = null;
        this.tailNode = current;
        this.length -= 1
    
    }
    
    contains(value) {
        let current = this.headNode; 
    
        while (current.nextNode !== null) {
          // console.log(current.value)
          if (current.value === value || current.nextNode.value === value) {
            return console.log(true);
          }
    
          current = current.nextNode;
    
        }
    
        console.log(false)
    
      }
    
    find(value) {
        let index = 0
        let current = this.headNode;

        while (current.nextNode !== null) {
            // console.log(current.value)
            if (current.value === value) {
                return console.log(index)
              
            } 
            current = current.nextNode;
            index += 1;

            if (current.nextNode === null) {
                return console.log("null")
            }
        }
    }
    
    toString() {
        let current = this.headNode;
        let strArr = []
        while (current.nextNode !== null) {
          strArr.push(`( ${current.value} ) ->`)
          current = current.nextNode;
        }
        strArr.push(`( ${current.value} ) ->`)
        strArr.push(`( ${current.nextNode} )`)
        console.log(strArr.join(" "))
      }

}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fox")


console.log(list)


console.log(`List length is: ${list.size()}`);
console.log(list.toString());
