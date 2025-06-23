/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let res = [];
    let zeroes = 0;

    for (let i=0; i<nums.length; i++) {
        // handle last element
        if (i === nums.length-1) {
            res.push(nums[i]);
            break;
        }

        if (nums[i] === 0) {
            zeroes++;
        } else if (nums[i] === nums[i+1]) {
            res.push(nums[i]*2);
            i++;
            zeroes++;
        } else {
            res.push(nums[i]);
        }
    }
    // add required zeroes to the end
    res = res.concat(Array(zeroes).fill(0));

    return res;
};