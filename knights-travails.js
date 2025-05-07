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


            if (knightInBonuds(nextNode.coord) && nextNode.visited === false ) {
                queue.push([nextNode, currentNode[1].concat([nextNode])])
                visitedNodes.push(nextNode)
                count += 1

            }
        })

    }
    

}


knightMoves([0,0],[6,5])
