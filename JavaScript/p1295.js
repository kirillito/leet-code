/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res = 0;
    
    for (i of nums) {
        if (i.toString().length % 2 === 0) 
            {
                res++;
            }
    }
    
    return res;
};