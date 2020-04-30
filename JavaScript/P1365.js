/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = [];

    let counters = [];

    // generate array with counters of number occurence
    // input example: [8,1,2,2,3]
    // counters: [empty,1,2,1,empty,empty,empty,empty,1]
    for (let i=0; i<nums.length; i++) {
        counters[nums[i]] = (counters[nums[i]] || 0) + 1;
    }

    // update counters array, filling it with sum of occurances of every array number before it
    // counters: [0,0,1,3,4,4,4,4,4]
    let sum = 0;
    for (let i=0; i<counters.length; i++) {
        let plus = (counters[i] || 0);
        counters[i] = sum;
        sum += plus;
    }

    // go through original arrray again, and generate result array with total smaller number occurences for every array element
    for (let i=0; i<nums.length; i++) {
        res.push(counters[nums[i]]);
    }

    return res;
};
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent([6,5,4,8]));
console.log(smallerNumbersThanCurrent([7,7,7,7]));
console.log(smallerNumbersThanCurrent([]));
console.log(smallerNumbersThanCurrent([7]));