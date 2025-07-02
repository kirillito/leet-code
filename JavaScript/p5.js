/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    this.start = 0, this.end = 0;

    for (let i=0; i<s.length; i++) {
        // single character in the middle
        checkPalindromeSubstrings(s, i, i);
        // two of the same character in the middle
        checkPalindromeSubstrings(s, i, i+1);
    }

    return s.slice(this.start, this.end+1);
}

var checkPalindromeSubstrings = function(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    left++;
    right--;
    if ((this.end - this.start) < (right - left)) {
        this.start = left;
        this.end = right;
    }
}

/* Failed recursion solution
var longestPalindrome = function(s) {
    this.cache = {};
    this.longest = "";
    return checkPalindrome(s);
};

var checkPalindrome = function(s) {
    if (this.longest.length > s.length) {
        return "";
    }
    if (s.length === 1) {
        if (s.length > this.longest.length) {
            this.longest = s;
        }
        return s;
    }
    if (!this.cache[s]) {
        this.cache[s] = isPalindrome(s);
    } 
    if (this.cache[s]) {
        if (s.length > this.longest.length) {
            this.longest = s;
        }
        return s;
    } else {
        let left = checkPalindrome(s.slice(0,s.length-1));
        let right = checkPalindrome(s.slice(1,s.length));
        return (left.length >= right.length) ? left : right;
    }
}

var isPalindrome = function(s) {
    for (let i=0; i<s.length/2; i++) {
        if (s[i] !== s[s.length-i-1]) {
            return false;
        }
    }
    return true;
}
*/