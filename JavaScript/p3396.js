/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const n = nums.length;
    // use map to keep track of unique numbers
    let map = {};
    // start of the block of unique numbers
    // can be greater than n until last elements proven to be unique
    let start = n - (n % 3) + 2;

    // start from the end of the array
    // testing elements for uniqueness
    // and shifting start of the unique block if all elements are unique so far
    let i = n-1;
    while (start>=0 && !map[nums[i]]) {
        map[nums[i]] = true;
        i--;
        // reached the current start of the block of unique numbers
        // all numbers tested are unique, so we can expand the start of the block
        if (i <= (start-3)) {
            start -= 3;
        }
    }

    // start is zero-index based, so increase it by 1
    // divide by 3 to receive number of operations needed to arrive at that index
    return (start + 1) / 3;
};