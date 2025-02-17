/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    this.stringSet = new Set();

    let generateString = function(base, tiles) {
        if (tiles.length <= 0) {
            return;
        }

        for (let i=0; i<tiles.length; i++) {
            this.stringSet.add(base+tiles[i]);
            generateString(base+tiles[i], tiles.slice(0,i).concat(tiles.slice(i+1)));
        }
        return;
    }
    generateString("", tiles);

    return this.stringSet.size;
};