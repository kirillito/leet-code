/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = [];
    let map = {};

    for (let d1=1; d1<=9; d1++) {
        let d1i = digits.indexOf(d1);
        // skip the digit if it's not in a given array
        if (d1i < 0) {
            continue;
        }
        for (let d2=0; d2<=9; d2++) {
            // search for second digit in source array
            // but make sure we account for first and second digit possible equality
            let d2i = digits.indexOf(d2, d1 === d2 ? d1i + 1 : 0);
            // skip the digit if it's not in a given array
            if (d2i < 0) {
                continue;
            }

            // only check even numbers for last digit
            for (let d3=0; d3<=8; d3+=2) {
                // search for third digit in source array
                // but make sure we account for duplicates
                let d3i = digits.indexOf(d3, 
                    d3 === d2 ? d2i + 1
                        : d3 === d1 ? d1i + 1 
                            : 0);

                if (d3i >= 0) {
                    res.push(d1*100+d2*10+d3);
                }
            }
        }
    }

    return res;
};