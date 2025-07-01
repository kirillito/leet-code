/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let start = 0, end = 0;
    let max = 0;

    for (let i=0; i<s.length; i++) {
        if (set.has(s[i])) {
            // found repeating character
            // shorten sliding window
            while (start < i && s[start] !== s[i]) {
                set.delete(s[start]);
                start++;
            }
            set.delete(s[start]);
            start++;
        }
        set.add(s[i]);
        end=i;

        let current = end-start+1;
        max = (max < current) ? current : max;
    }

    return max;
};