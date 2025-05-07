class Node {
    constructor([x, y]) {
        this.x = x
        this.y = y
        this.coord = [x, y]
        this.visited = false
    }
}

const possibleMoves = [
    [2,1],
    [2,-1],
    [1,2],
    [1,-2],
    [-1,2],
    [-1,-2],
    [-2,-1],
    [-2,1]
]

function knightInBonuds(node) {
    return node[0] >= 0 && node[0] < 8 && node[1] >= 0 && node[1] < 8

}




function knightMoves([startX, startY], [endX, endY]) {
    const startNode = new Node([startX, startY])
    const endNode = new Node([endX, endY])
    // const path = []
    let count = 0

    const queue = [[startNode, path = [startNode]]]
    const visitedNodes = []



    while (queue.length > 0) {
        const currentNode = queue.shift()
        currentNode[0].visited = true

        visitedNodes.push(currentNode[0])

        if (currentNode[0].x === endNode.x && currentNode[0].y === endNode.y) {
            return console.log(`You made it in ${currentNode[1].length} moves!`,  currentNode[1])
        } 

        possibleMoves.forEach((move) => {
            nextNode = new Node([(currentNode[0].x + move[0]), (currentNode[0].y + move[1])])
sds

            if (knightInBonuds(nextNode.coord) && nextNode.visited === false ) {
                queue.push([nextNode, currentNode[1].concat([nextNode])])
                visitedNodes.push(nextNode)
                count += 1

            }
        })

    }
    

}


knightMoves([0,0],[6,5])



// console.log('while loop started')
//         const node = path.shift()

//         console.log('path is', path)

//         if (node.coord === endNode.coord) {
//             console.log('node === endNode')
//             return visitedNodes
//         }

//         node.visited = true;
//         visitedNodes.push(node)
//         console.log('visited nodes is', visitedNodes)
//         // console.log(visitedNodes)

//         possibleMoves.forEach((move) => {
//             console.log('move is ', move)

//             let x = node.x + move[0]
//             let y = node.y + move[1]

//             const newNode = new Node([x, y])
//             console.log('new node is ', newNode)

            // if (newNode.x < 0 || newNode.x > 7 || newNode.y < 0 || newNode.y > 7) {
            //     return console.log('out of bounds')
            // } else {
            //     path.push(newNode)
            // }

        // })

        // for (const move of possibleMoves) {
        //     console.log('for loop started')
        //     // console.log(move)
        //     // console.log(move[0])
        //     // console.log(move[1])
            

        //     let x = node.x + move[0]
        //     let y = node.y + move[1]
            
            
        //     if ((x >= 0 && x <= 7 && y >= 0 && y <= 7)) {
        //         const newNode = new Node([x, y])
        //         console.log('new node is', newNode)
        //         path.push(newNode)
        //     } else {
        //         console.log('out of bounds')
        //         return
        //     }
            
        // }
        
        // console.log(`visitednodes array is`, visitedNodes )

        // possibleMoves.forEach((pair) => {

    //     let node = new Node([x, y])
    //     node.previousNode = startNode
        
    //     results.push(node)

    //     // if (x <= 7 && y <= 7) {
            
    //     // }
    // })


    // console.log(startNode,endNode)
    // console.log(path)