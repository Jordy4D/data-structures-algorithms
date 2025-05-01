class Node {
    constructor([x, y]) {
        this.x = x
        this.y = y
        this.coord = [x, y]
        this.previousNode = null
        this.visited = false
    }
}




function knightMoves([startX, startY], [endX, endY]) {
    const startNode = new Node([startX, startY])
    const endNode = new Node([endX, endY])
    const board = 8
    
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
    


    const path = [startNode]

    const visitedNodes = []

    while (path.length > 0) {

        const node = path.shift()

        if (node === endNode) {
            return path
        }


    }

    // possibleMoves.forEach((pair) => {
    //     let x = startX + pair[0]
    //     let y = startY + pair[1]

    //     let node = new Node([x, y])
    //     node.previousNode = startNode
        
    //     results.push(node)

    //     // if (x <= 7 && y <= 7) {
            
    //     // }
    // })


    // console.log(startNode,endNode)
    console.log(results)

}


knightMoves([4,5],[2,1])