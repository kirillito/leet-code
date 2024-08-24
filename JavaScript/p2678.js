/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter(x => Number.parseInt(x.substring(11,13))>60).length;
};