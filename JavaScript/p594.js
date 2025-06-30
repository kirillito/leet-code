/**
 * @param {number[]} nums
 * @return {number}
 */
 // Faster solution using Map()
 var findLHS = function(nums) {
    if (nums.length<2) {
        return 0;
    }
    // build map of all number occurrences
    let map = new Map();
    for (let i=0; i<nums.length; i++) {
        let v = map.get(nums[i]) ?? 0;
        map.set(nums[i], v + 1);
    }
    // search through the map to see if for x value there are x-1 values 
    // present in the map and find max sum of occurrences of both
    let max = 0;
    map.forEach((v,k) => {
        if (map.has(k-1)) {
            let subLen = map.get(k-1) + v;
            if (subLen > max) {
                max = subLen;
            }
        }
    });

    return max;
 }
// Slow
// var findLHS = function(nums) {
//     if (nums.length<2) {
//         return 0;
//     }

//     // build map of all number occurrences
//     let map = {};
//     for (let i=0; i<nums.length; i++) {
//         map[nums[i]] = (map[nums[i]] ?? 0) + 1;
//     }
//     let keys = Object.keys(map).map(x => Number.parseInt(x)).sort((a,b) => a-b);
//     // iterate through the result and find max sum
//     // of neighboring elements with distance 1
//     let max = 0;
//     for (let i=0; i<keys.length-1; i++) {
//         if (keys[i+1] - keys[i] === 1) {
//             let subLen = map[keys[i]] + map[keys[i+1]];
//             if (subLen > max) {
//                 max = subLen;
//             }
//         }
//     }
//     return max;
// };