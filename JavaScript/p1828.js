/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function(points, queries) {
    // brute force solution beats 94% of other submissions
    let res = [];
    for (let i=0; i<queries.length; i++) {
        // to avoid calculating this multiple times
        let rSq = queries[i][2]**2;
        let hits = 0;
        for (let j=0; j<points.length; j++) {
            if ((points[j][0]-queries[i][0])**2 
                + (points[j][1]-queries[i][1])**2 <= rSq) {
                    hits++;
                }
        }
        res.push(hits);
    }

    return res;
};