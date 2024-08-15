/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;

    for (let i=0; i<bills.length; i++) {
        // customer pays with $5 - no change needed, save the bill
        if (bills[i] === 5) {
            fives++;
        }
        // customer pays with $10 - check if we have $5, 
        // and if yes, then decrease $5 and increase $10 
        else if (bills[i] === 10) {
            if (fives === 0) return false;
            fives--;
            tens++;
        }
        // customer pays with $20 - check if we have $10 and $5,
        // if no - check if we have 3 x $5
        // if any of the above are true - decrease relevant $ bills
        // otherwise - break and return false
        else {
            // prioritize getting rid of $10 first
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (tens === 0 && fives >= 3) {
                fives -= 3;
            } else
                return false;
        }
    }
    return true;

};