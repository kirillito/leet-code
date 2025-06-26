/**
 * @param {number} n
 * @return {number}
 */
// Slow
// var trailingZeroes = function(n) {
//     let counter = 0;

//     for (let i=1; i<=n; i++) {
//         // we get trailing zeroes from multiplying by 10 or by 5
//         let current = i;
//         while (current%5 === 0) {
//             counter++;
//             current = Math.trunc(current/5);
//         }
//     }

//     return counter;
// };

// Fast
var trailingZeroes = function(n) {
    let counter = 0;

    for (let i=5; i<=n; i*=5) {
        counter+=Math.trunc(n/i);
    }

    return counter;
};