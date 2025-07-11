/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const binarySearch = function(arr, item) {
        let left=0, right=arr.length-1;
        while (left < right) {
            let i = Math.floor(left + (right - left)/2);
            if (arr[i] < item) {
                left = i+1;
            } else {
                right = i;
            }
        }
        return right;
    }

    let seq = [];
    seq.push(nums[0]);

    for (let i=1; i<nums.length; i++) {
        let current = nums[i];
        if (current > seq[seq.length-1]) {
            seq.push(current);
        } else {
            let index = binarySearch(seq, current);
            seq[index] = current;
        }
    }

    return seq.length;
};