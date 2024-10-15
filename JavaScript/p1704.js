/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = {'a':true, 'e':true, 'i':true, 'o':true, 'u':true, 'A':true, 'E':true, 'I':true, 'O':true, 'U':true};
    let n = s.length;
    
    return (s.slice(0,n/2)
        .split('')
        .filter(x => x in vowels)
        .length
        ===
        s.slice(n/2)
        .split('')
        .filter(x => x in vowels)
        .length);
};