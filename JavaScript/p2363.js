/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    // sort both arrays
    items1.sort((a,b) => a[0]-b[0]);
    items2.sort((a,b) => a[0]-b[0]);

    // then use two pointers to go over the items in both arrays    
    let res = [];
    let p1 = 0, p2 = 0;
    while (p1<items1.length || p2<items2.length) {
        // we're done with first array - just fill up leftovers from second one
        if (p1>=items1.length) {
            res.push(items2[p2]);
            p2++;
            continue;
        } else if (p2>=items2.length) {
            // we're done with second array - just fill up leftovers from first one
            res.push(items1[p1]);
            p1++;
            continue;
        }

        if (items1[p1][0] < items2[p2][0]) {
            res.push(items1[p1]);
            p1++;
        } else if (items1[p1][0] > items2[p2][0]) {
            res.push(items2[p2]);
            p2++;
        } else {
            res.push([items1[p1][0], items1[p1][1] + items2[p2][1]]);
            p1++;
            p2++;
        }
    }

    return res;
};