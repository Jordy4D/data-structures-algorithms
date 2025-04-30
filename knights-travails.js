class Node {
    constructor([x, y]) {
        this.x = x
        this.y = y
        this.coord = [x, y]
        this.previousNode = null
        this.nextNode = null
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
    

      console.log(startNode,endNode)
}


knightMoves([1,2],[3,3])