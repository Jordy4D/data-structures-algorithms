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

    buildTree(array) {
        const newArray = array;
        // this.root = new Node(array[0])
        
        // console.log(newArray)
        
        const cleanArray = this._sortAndDedupe(array)
        
        const start = 0
        const end = cleanArray.length - 1
        
        
        
        
        console.log(newArray)
        console.log(cleanArray)
        console.log(start, end)

        


            // while (current > next) {
            //     let temp = current
            //     newArray[x] = next
            //     newArray[x+1] = temp
            //     console.log(`Swap! ${current} and ${next} were swapped`)

            // }

            // if (current > next) {
            // } else {

            // }

            
        // }
        // console.log(array)
        // console.log(newArray)
        // console.log(sortedArray)

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

const test = new Tree()

test.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])