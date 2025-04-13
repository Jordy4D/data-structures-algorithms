class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array, root = null) {
        this.root = root;
        this.array = array
    }

    buildTree(array) {
        this.array = array;
        this.root = new Node(array[0])

        
       
    }

}
