/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let num = convert(s);
    
    for (let i=1; i<=k; i++) {
        num = transform(num.toString());
    }
    return num;
};

var convert = function(s) {
    let num = "";
    for (let i=0; i<s.length; i++) {
        num += (s.charCodeAt(i)-96).toString();
    }
    return num;
}

var transform = function(s) {
    let res = 0;
    for (let i=0; i<s.length; i++) {
        res += Number.parseInt(s[i]);
    }
    return res;
}