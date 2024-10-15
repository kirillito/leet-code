/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let res = 0;

    for (let first=0; first<=limit; first++) {
        for (let second=0; second<=limit; second++) {
            let third = n-first-second;
            if (third >= 0 && third <= limit) res++;
        }
    }

    return res;
};