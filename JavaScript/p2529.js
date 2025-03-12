/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let n = nums.length;
    let binSearch = function(nums, mode) {
        let start = 0;
        let end = nums.length-1;
        while (start < end) {
            if (mode === 'positive') {
                let mid = Math.floor((start+end) / 2);
                if (nums[mid] > 0) {
                    end = mid;
                } else {
                    start = mid+1;
                }
            } else {
                let mid = Math.ceil((start+end) / 2);
                if (nums[mid] < 0) {
                    start = mid;
                } else {
                    end = mid-1;
                }
            }
        }
        return start;
    }

    // edge cases
    if (nums[0]===0 && nums[n-1]===0) return 0;
    if (n === 1) return 1;
    if (nums[0]>0 || nums[n-1]<0) return n;
    
    // o(log(n)) solution
    let pos = n - binSearch(nums, 'positive');
    let neg = binSearch(nums, 'negative') + 1;

    return Math.max(pos, neg);
};