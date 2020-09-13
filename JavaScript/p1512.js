/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    var sequenceSum = function(k) {
        return k*(1+k)/2;
    }
    
    var res = 0;
    var counters = {};
    
    // frequency counter
    for (let i=0; i<nums.length; i++) {
        counters[nums[i]] = (counters[nums[i]] || 0) + 1;
    }
    
    for (k in counters) {
        res += sequenceSum(counters[k] - 1);
    }
    
    return res;
};



console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));
console.log(numIdenticalPairs([]));
console.log(numIdenticalPairs([7]));