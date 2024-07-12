/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let n = image.length;
    for (let i=0; i<n; i++) {
        for (let j=0; j<n/2; j++) {
            let tmp = image[i][j];
            image[i][j] = (image[i][n-1-j]+1)%2;
            image[i][n-1-j] = (tmp+1)%2;
        }
    }

    return image;
};