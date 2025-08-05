/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let unplaced = 0;
    for (let i=0; i<fruits.length; i++) {
        for (let j=0; j<baskets.length; j++) {
            if (baskets[j] >= fruits[i]) {
                fruits[i] = 0;
                baskets[j] = 0;
                break;
            }
        }
        if (fruits[i] !== 0) {
            unplaced++;
        }
    }
    return unplaced;
};