/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0;
    let currentRowDeviceNumber = 0;
    let prevRowDeviceNumber = 0;

    for (let row=0; row<bank.length; row++) {
        // skip rows without devices
        if (bank[row].indexOf('1') === -1) {
            continue;
        }
        let deviceNumber = bank[row].split('1').length-1;

        prevRowDeviceNumber = currentRowDeviceNumber;
        currentRowDeviceNumber = deviceNumber;

        res += currentRowDeviceNumber*prevRowDeviceNumber;
    }

    return res;
};