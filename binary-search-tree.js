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
    
    levelOrder(callback = null) {
        if (this.root === null) {
            return []; 
        }

        const queue = [this.root];
        const results = []

        while (queue.length > 0) {
            const node = queue.shift()

            if (!callback) {
                throw Error("no callback function called")
            }

            if (callback) {
                callback(node)
            } 
            
            results.push(node)

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        return results;

    }


    preOrder(callback = null) {
        
        const traverse = (node) => {
            if (node === null) {
                return; 
            }

            callback(node)
            traverse(node.left)
            traverse(node.right)
        }


        if (!callback) {
            throw Error('No Callback Provided')
        }


        traverse(this.root)

    }

    inOrder(callback = null) {
        
        const traverse = (node) => {
            if (node === null) {
                return; 
            }

            traverse(node.left)
            callback(node)
            traverse(node.right)
        }


        if (!callback) {
            throw Error('No Callback Provided')
        }


        traverse(this.root)

    }

    postOrder(callback = null) {
        
        const traverse = (node) => {
            if (node === null) {
                return; 
            }

            traverse(node.left)
            traverse(node.right)
            // console.log("the current postOrder node is", node.value)
            callback(node)
        }


        if (!callback) {
            throw Error('No Callback Provided')
        }


        traverse(this.root)

    }


    height(value) {
        if (!value) {
            return null;
        }

        

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


// test.levelOrder(node => console.log("Visiting:", node.value))
test.preOrder(node => console.log('Visiting preOrder:', node.value))
test.inOrder(node => console.log('Visiting inOrder:', node.value))
test.postOrder(node => console.log('Visiting postOrder:', node.value))

// 