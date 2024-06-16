/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    var elementSum = 0;
    var digitSum = 0;

    for (let num of nums) {
        elementSum += num;
        digitSum += num%10 + Math.floor(num/10)%10 + Math.floor(num/100)%10 + Math.floor(num/1000)%10;
    }

    return Math.abs(elementSum - digitSum);
};