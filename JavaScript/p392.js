/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let p1 = 0, p2 = 0;

  if (!s) return true;

  while (p1 < s.length && p2 < t.length) {
    if (t[p2] === s[p1]) {
        p1++;
    }
    p2++;
  }

  if (p1 === s.length)
    return true;
  else
    return false;
};