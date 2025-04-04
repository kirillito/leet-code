/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }

    let isInc = arr[0] < arr[1];
    // if not increasing right away - fail
    if (!isInc) {
        return false;
    }

    for (let i=2; i<arr.length; i++) {
        // not a strict increase/decrease - fail
        if (arr[i-1] === arr[i]) {
            return false;
        }

        if (isInc) {
            // switching from increase to decrease - can be allowed only once
            if (arr[i-1] > arr[i]) {
                isInc = false;
            }
        } else {
            // increasing again - fail
            if (arr[i-1] < arr[i]) {
                return false;
            }
        }
    }

    // still increasing, no decreasing - fail
    if (isInc) {
        return false;
    } else {
        // decreasing in the end - success
        return true;
    }
};