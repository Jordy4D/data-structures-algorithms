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
       
        if (!array || start > end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2)
        const node = new Node(array[mid])
        




        node.left = this.buildTree(array, start, mid - 1)
        node.right = this.buildTree(array, mid + 1, end)
        

              
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


    
    find(value) {
        
        const search = (node) => {
            if (node === null) {
                return null
            }

            if (node.value === value ) {
                return node
            } else if (value < node.value) {
                return search(node.left)
            } else {
                return search(node.right) 
            }

        }

        return search(this.root);
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
        const node = this.find(value);
        if (node === null) {
            return null;
        }

        const calcHeight = (node) => {
            if (node === null) {
                return -1;
            } 

            const leftHeight = calcHeight(node.left);
            const rightHeight = calcHeight(node.right);
            
            return Math.max(leftHeight, rightHeight) + 1;
        };
    
        return calcHeight(node);



    }

    // working on it
    depth(root, value) {
        
        if (!root) {
            return -1
        }

        let dist = -1

        if (root.value === value || 
            (dist = this.depth(root.left, value)) >= 0 ||
            (dist = this.depth(root.right, value)) >= 0) {
                return dist + 1
            }
 
        return dist

       
    }

    isBalanced(root) {
        
        if (root === null) {
            return true;
        }

        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);

        if (Math.abs(lHeight - rHeight) > 1) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)

    }

    rebalance() {
        const values = [];

        function inOrder(node) {
            if (node === null) {
                return;
            } 

            inOrder(node.left);
            values.push(node.value)
            inOrder(node.right)
        }

        inOrder(this.root)

        const cleanArr = this._sortAndDedupe(values)

        this.root = this.sortedArrToBST(cleanArr)
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

// INITIAL TESTS
// const test = new Tree()
// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// const sortedArr = test._sortAndDedupe(arr)



// test.root = test.sortedArrToBST(sortedArr) 

// prettyPrint(test.root)
// test.insert(test.root, 30)
// prettyPrint(test.root)
// test.delete(test.root, 23)
// prettyPrint(test.root)
// console.log(test.find(5))


// test.levelOrder(node => console.log("Visiting:", node.value))
// test.preOrder(node => console.log('Visiting preOrder:', node.value))
// test.inOrder(node => console.log('Visiting inOrder:', node.value))
// test.postOrder(node => console.log('Visiting postOrder:', node.value))

// console.log(test.height(67))
// console.log(test.depth(test.root, 324))
// console.log(test.isBalanced(test.root))





// === DRIVER SCRIPT ===

// Helper function: generate an array of random numbers < 100
function randomArray(size = 15, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// 1. Create a Tree from a random array
const tree = new Tree();
const randomNums = randomArray(15); // 15 random numbers
console.log("Random Numbers Generated:", randomNums);

// Sort and dedupe the array
const cleanNums = tree._sortAndDedupe(randomNums);

// Build the tree
tree.root = tree.buildTree(cleanNums, 0, cleanNums.length - 1);

console.log("\nInitial Tree:");
prettyPrint(tree.root);

// 2. Confirm the tree is balanced
console.log("\nIs the tree balanced?", tree.isBalanced(tree.root));

// 3. Print out traversals
console.log("\nLevel Order Traversal:");
tree.levelOrder(node => console.log(node.value));

console.log("\nPre-Order Traversal:");
tree.preOrder(node => console.log(node.value));

console.log("\nPost-Order Traversal:");
tree.postOrder(node => console.log(node.value));

console.log("\nIn-Order Traversal:");
tree.inOrder(node => console.log(node.value));

// 4. Unbalance the tree by inserting numbers > 100
const bigNumbers = [120, 140, 160, 180, 200];
console.log("\nInserting large numbers to unbalance:", bigNumbers);

bigNumbers.forEach(num => {
    tree.root = tree.insert(tree.root, num);
});

console.log("\nTree after inserting large numbers:");
prettyPrint(tree.root);

// 5. Confirm the tree is now unbalanced
console.log("\nIs the tree balanced after insertions?", tree.isBalanced(tree.root));

// 6. Rebalance the tree
console.log("\nRebalancing the tree...");
tree.rebalance();

console.log("\nTree after rebalancing:");
prettyPrint(tree.root);

// 7. Confirm the tree is balanced again
console.log("\nIs the tree balanced now?", tree.isBalanced(tree.root));

// 8. Final Traversals
console.log("\nFinal Level Order Traversal:");
tree.levelOrder(node => console.log(node.value));

console.log("\nFinal Pre-Order Traversal:");
tree.preOrder(node => console.log(node.value));

console.log("\nFinal Post-Order Traversal:");
tree.postOrder(node => console.log(node.value));

console.log("\nFinal In-Order Traversal:");
tree.inOrder(node => console.log(node.value));

