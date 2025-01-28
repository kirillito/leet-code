/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowels = new Set([
        'a','e','i','o','u','A','E','I','O','U'
    ]);
    let sVowels = s.split('').filter(c => vowels.has(c)).sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0));
    let updatedS = "";

    for (let i=0; i<s.length; i++) {
        if (!vowels.has(s[i])) {
            updatedS += s[i];
        } else {
            updatedS += sVowels.pop();
        }
    }

    return updatedS;
};