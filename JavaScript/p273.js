/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) {
        return "Zero";
    }

    this.digits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", 
            "Eight", "Nine" ];
    this.decs = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty",
            "Seventy", "Eighty", "Ninety" ];
    this.teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
            "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    // Helper function for numbers less than 1,000
    var smallNumberToWords = function(num) {
        let s = [];
        let d3 = num % 10;
        let d2 = (Math.trunc(num/10)) % 10;
        let d1 = Math.trunc(num/100);

        // 1xx
        if (d1 > 0) {
            s.push(this.digits[d1]);
            s.push("Hundred");
        }
        if (d2 > 0) {
            // 1x
            if (d2 === 1) {
                s.push(this.teens[d3]);
            } else {
                // 2x, 3x, 4x, ...
                s.push(this.decs[d2]);
                if (d3 > 0) {
                    s.push(this.digits[d3]);
                }
            }
        } else {
            // 0x
            if (d3 > 0) {
                s.push(this.digits[d3]);
            }
        }
        
        return s.join(' ');
    }

    // max int 2,147,483,647

    let res = [];
    let block4 = num % 1000,
        block3 = Math.trunc(num / 1000) % 1000,
        block2 = Math.trunc(num / 1000000) % 1000,
        block1 = Math.trunc(num / 1000000000) % 10;

    if (block1 > 0) {
        res.push(this.digits[block1]);
        res.push("Billion");
    }
    if (block2 > 0) {
        res.push(smallNumberToWords(block2));
        res.push("Million");
    }
    if (block3 > 0) {
        res.push(smallNumberToWords(block3));
        res.push("Thousand");
    }
    if (block4 > 0) {
        res.push(smallNumberToWords(block4));
    }

    return res.join(' ');
};
