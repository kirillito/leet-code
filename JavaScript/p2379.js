/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
    // simple sliding window
    let start = 0;
    let end = 0;
    let min = 0;
    let current = 0;

    while (end < blocks.length) {
        current += (blocks[end] === 'W') ? 1 : 0;
        
        if (end - start < k) {
            min = current;
            end++;
        } else {
            current -= (blocks[start] === 'W') ? 1 : 0;
            min = Math.min(min, current);
            start++;
            end++;
        }
    }

    return min;

    /*
    // divide and conquer algorithm - overkill

    const getMinRecolor = function(blocks, start, k) {
        if (k === 0) {
            return 0;
        }
        // if reached the end of the string withoout finding solution 
        // then return length of the whole string
        if (start >= blocks.length) {
            return blocks.length;
        }
        // block is already black - go to the next one
        if (blocks[start] === 'B') {
            return getMinRecolor(blocks, start+1, k-1);
        } 
        // block is white
        // option 1: recolor and go to the next one
        let recolor = 1 + getMinRecolor(blocks, start+1, k-1);
        // option 2: skip this block and check if we should start with next one
        let skip = getMinRecolor(blocks, start+1, k);

        return Math.min(recolor, skip);
    };

    return getMinRecolor(blocks, 0, k);
    */
};