/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let res = 0;
    rings = rings.split('');
    let rods = [];

    for (let i=0; i<rings.length; i+=2) {
        rods[rings[i+1]] = rods[rings[i+1]] ?? {};
        rods[rings[i+1]][rings[i]] = true;
    }
    for (let i=0; i<10; i++) {
        if (rods[i] && rods[i].R && rods[i].G && rods[i].B) {
            res++;
        }
    }

    return res;
};