/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    num1 = String(num1).padStart(4,"0")
    num2 = String(num2).padStart(4,"0")
    num3 = String(num3).padStart(4,"0")
    return Math.min(num1[0], num2[0], num3[0])*1000
        + Math.min(num1[1], num2[1], num3[1])*100
        + Math.min(num1[2], num2[2], num3[2])*10
        + Math.min(num1[3], num2[3], num3[3]);
};