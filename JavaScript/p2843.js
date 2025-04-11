/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;

    for (let i=low; i<=high; i++) {
        // skip elements that are guaranteed to not match criteria
        if (i < 10) {
            i = 10;
        } else if (i >= 10 && i <= 99) {
            count += (Math.floor(i/10) === i%10) ? 1 : 0;
        } else if (i > 99 && i < 1001) {
            i = 1000;
        } else if (i >= 1001 && i <= 9999) {
            let left = Math.floor(i/100);
            let right = i%100;
            count += ((Math.floor(left/10) + left%10) 
                === (Math.floor(right/10) + right%10))
                ? 1 : 0;
        }
    }

    return count;
};