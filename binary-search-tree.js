class Node {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(array, start = 0, end = array.length - 1) {
        // const newArray = array;
        
        // const cleanArray = this._sortAndDedupe(array)
        
        // start = 0
        // end = cleanArray.length - 1
        if (!array || start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2)
        const node = new Node(array[mid])
        




        node.left = this.buildTree(array, start, mid - 1)
        node.right = this.buildTree(array, mid + 1, end)
        

        // console.log(node.left)
        // console.log(node.right)
        // console.log(node.left)        
        // console.log(node.right)
        // console.log(cleanArray)
        // console.log(cleanArray[mid])
        

        

        // prettyPrint(node.left)  

        
        return node


    }

    callTreeFunc(array) {
        this.root = this.buildTree(array)
    }

    _sortAndDedupe(array) {
        const newArray = array
        const sortedArray = newArray.sort(function(a, b){ return a-b})
        const dedupeArr = []

        // de-dupe array
        for (let x = 0; x < sortedArray.length; x++) {
            let current = sortedArray[x]
            let next = sortedArray[x+1]
            
            if (current === next) {
                continue;
            } else {

                dedupeArr.push(current)
            }
        }

        return dedupeArr

    }

    
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};


const test = new Tree()
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const sortedArr = test._sortAndDedupe(arr)



test.root = test.buildTree(sortedArr) 
prettyPrint(test.root)