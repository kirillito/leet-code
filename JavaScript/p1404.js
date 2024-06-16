/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    // strings are immutable in JS - it's easier to do this with array
    let arr = s.split('');
    let res = 0;

    let add = false;
    while (arr.length > 1 || arr[0] !== "1") {
        let n = arr.length;
        if (add) {
            if (arr[n-1] === "1") {
                arr[n-1] = "0";
            } else {
                arr[n-1] = "1";
                add = false;
            }
        }

        if (arr[n-1] === "1") {
            res += 2;
            add = true;
        } else {
            res++;
        }
        arr.pop();
        
        if (add && arr.length === 1 && arr[0] === "1") {
            arr[0] = "0";
            arr.unshift("1");
            add = false;
        }
    }

    if (arr[0] === "0") res++;

    return res;
};