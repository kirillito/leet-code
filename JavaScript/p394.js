/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let decoded = "";
    let numStack = [];
    let strStack = [];

    for (let i=0; i<s.length; i++) {
        // numbers
        if (s.charCodeAt(i) < 58) {
            let currentNum = 0;
            while (s.charCodeAt(i) < 58) {  
                currentNum = currentNum*10 + Number.parseInt(s[i]);
                i++;
            }
            numStack.push(currentNum)
        }
        if (s[i] === '[') {
            strStack.push(decoded);
            decoded = "";
        } else if (s[i] === ']') {
            let repeat = numStack.pop();
            let tmp = strStack.pop();
            tmp += decoded.repeat(repeat);
            decoded = tmp;
        } else {
            decoded += s[i];
        }
    }

    return decoded;
};