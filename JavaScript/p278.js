/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 0)
            return 0;

        let left = 1;
        let right = n
        //let arr = Array(n).fill(undefined);
        
        let middle = 0;
        
        while (left < right) {
            middle = Math.floor((left + right)/2);
            
            //if (arr[middle] === undefined) {
            //    arr[middle] = isBadVersion(middle);
            //} 
            
            if(!isBadVersion(middle)) {
              left = middle+1;
            } else {
              right = middle;
            }
            
        }

        return left;
    };
};