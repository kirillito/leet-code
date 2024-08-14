/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for (let i=0; i<heights.length; i++) {
        let highest = i;
        for (let j=i+1; j<heights.length; j++) {
            if (heights[j] > heights[highest]) {
                highest = j;
            }
        }
        if (i !== highest) {
            [names[i], names[highest]] = [names[highest], names[i]];
            [heights[i], heights[highest]] = [heights[highest], heights[i]];
        }
    }
    
    return names;
};