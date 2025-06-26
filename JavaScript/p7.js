/**
 * @param {number} x
 * @return {number}
 */

// String manipulation
// var reverse = function(x) {
//     // in JS we don't have to worry about int overflow
//     const max = 2**31-1;
//     const min = -1*2**31;
//     let sign = x/Math.abs(x);
//     x = sign * Number.parseInt(Math.abs(x).toString().split('').reverse().join(''));

//     return (x >= min && x <= max) ? x : 0;
// }

// Math solution
var reverse = function(x) {
    // in JS we don't have to worry about int overflow
    const max = 2147483647;
    const min = -2147483648;
    let reversedX = 0;
    // save sign, but do calculations for positive number
    let sign = Math.sign(x);
    x = Math.abs(x);

    while (x > 0) {
        let d = x % 10;
        reversedX = reversedX * 10 + d;
        x = Math.trunc(x/10);

        // early break in case of overflow
        if (reversedX > max) {
            return 0;
        }
    }
    // restore sign
    reversedX *= sign;

    return (reversedX >= min && reversedX <= max) ? reversedX : 0;
};


// Math solution 2
// var reverse = function(x) {
//     // in JS we don't have to worry about int overflow
//     const max = 214748364;
//     const min = -214748364;
//     let reversedX = 0;
    
//     while (x !== 0) {
//         let d = x % 10;

//         // early break in case of overflow
//         if (reversedX > max || (reversedX === max && d > 7)) {
//             return 0;
//         }
//         if (reversedX < min || (reversedX === min && d < -8)) {
//             return 0;
//         }
//         reversedX = reversedX * 10 + d;
//         x = Math.trunc(x/10);
//     }

//     return reversedX;
// };