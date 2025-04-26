class Node {
    constructor([x, y]) {
        this.x = x
        this.y = y
        this.coord = [x, y]
        this.previousNode = null
        this.nextNode = null
    }
}




function knightMoves([xx, xy], [yx, yy]) {
    const startNode = new Node([xx, xy])
    const endNode = new Node([yx, yy])  
    

      console.log(startNode,endNode)
}


knightMoves([1,2],[3,3])