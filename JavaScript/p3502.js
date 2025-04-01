/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function(cost) {
    let currentMin = cost[0];
    for (let i=1; i<cost.length; i++) {
        if (currentMin > cost[i]) {
            currentMin = cost[i];
        } else {
            cost[i] = currentMin;
        }
    }
    
    return cost;
};