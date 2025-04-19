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

    buildTree(array, start, end) {
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

    // callTreeFunc(array) {
    //     this.root = this.buildTree(array)
    // }

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

    // for use in buildTree method
    sortedArrToBST(arr) {
        return this.buildTree(arr, 0, arr.length - 1)
    }
    
    insert(root, value) {
        if (root === null) {
            return new Node(value)
        }

        if (root.value === value) {
            return root
        }

        if (value < root.value) {
            root.left = this.insert(root.left, value)
        } else if (value > root.value) {
            root.right = this.insert(root.right, value)
        }

        return root
    }

    // for use in delete method
    getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }
    
    delete(root, x) {
        if (root === null) {
            return root;
        }

        if (root.value > x) {
            root.left = this.delete(root.left, x)
        } else if (root.value < x ) {
            root.right = this.delete(root.right, x)
        } else {

            if (root.left === null) {
                return root.right
            }

            if (root.right === null) {
                return root.left
            }

            let succ = this.getSuccessor(root)
            root.value = succ.value
            root.right = this.delete(root.right, succ.value)
        }

        return root
    }

    find(root, value) {
        if (root === null) {
            return null
        }

        if (root.value === value ) {
            return root
        }

        if (root.value > value) {
            return this.find(root.left, value)
        } else if (root.value < value) {
            return this.find(root.right, value)
        } 

        // console.log(root)
        return this.root;
    }
    
    levelOrder(callback) {
        
    }

    
}

function prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};


const test = new Tree()
const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const sortedArr = test._sortAndDedupe(arr)



test.root = test.sortedArrToBST(sortedArr) 

prettyPrint(test.root)
test.insert(test.root, 30)
prettyPrint(test.root)
test.delete(test.root, 23)
prettyPrint(test.root)
console.log(test.find(test.root, 5))