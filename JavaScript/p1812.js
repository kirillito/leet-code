/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let i=coordinates.charCodeAt(0)-97;
    let j=coordinates.charCodeAt(1)-49;
    if ((i+j)%2===0) {
        return false;
    } else {
        return true;
    }
};