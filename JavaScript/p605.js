/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // edge case 1
    if (flowerbed[0] === 0 && (flowerbed.length === 1 || flowerbed[1] === 0)) {
        flowerbed[0] = 1;
        n--;
    } 

    for (let i=1; i<flowerbed.length-1; i++) {
        if (n <= 0) {
            return true;
        }

        if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            n--;
        }
    }

    // edge case 2
    if (flowerbed[flowerbed.length-1] === 0 && (flowerbed.length === 1 || flowerbed[flowerbed.length-2] === 0)) {
        flowerbed[flowerbed.length-1] = 1;
        n--;
    }

    return n <= 0;
};