/**
 * @param {number[][]} grid
 */
var NeighborSum = function(grid) {
    this.grid = grid;
    this.map = {};

    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid.length; j++) {
            this.map[grid[i][j]] = [i, j];
        }
    }
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function(value) {
    let i = this.map[value][0];
    let j = this.map[value][1];
    let sum = 0;

    if (i > 0) {
        sum+=this.grid[i-1][j];
    }
    if (i < this.grid.length-1) {
        sum+=this.grid[i+1][j];
    }
    if (j > 0) {
        sum+=this.grid[i][j-1];
    }
    if (j < this.grid.length-1) {
        sum+=this.grid[i][j+1];
    }

    return sum;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function(value) {
    let i = this.map[value][0];
    let j = this.map[value][1];
    let sum = 0;

    if (i > 0 && j > 0) {
        sum+=this.grid[i-1][j-1];
    }
    if (i < (this.grid.length-1) && j < (this.grid.length-1)) {
        sum+=this.grid[i+1][j+1];
    }
    if (i > 0 && j < (this.grid.length-1)) {
        sum+=this.grid[i-1][j+1];
    }
    if (i < (this.grid.length-1) && j > 0) {
        sum+=this.grid[i+1][j-1];
    }

    return sum;
};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */