/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let n = s.length;
    let costArr = [];

    for (let i=0; i<n; i++) {
        costArr.push(charCost(s,t,i));
    }

    let maxLength = costArr[0] <= maxCost ? 1 : 0;
    let left = 0;
    let right = 0;
    let currentCost = costArr[0];

    while (right < n-1 && left <= right) {
        if (currentCost + costArr[right+1] <= maxCost) {
            right++;
            currentCost += costArr[right];
        } else if (currentCost - costArr[left] + costArr[right+1] <= maxCost) {
            right++;
            currentCost = currentCost - costArr[left] + costArr[right];
            left++;
        } else {
            currentCost -= costArr[left];
            left++;
            
            if (left>right && right<n-1) {
                right++;
                currentCost += costArr[right];
            }
        }
        if (currentCost <= maxCost && right - left + 1 > maxLength) {
            maxLength = right - left + 1;
        }
    }

    return maxLength;
};

var charCost = function(s1, s2, i) {
    return Math.abs(s1.charCodeAt(i)-s2.charCodeAt(i));
}