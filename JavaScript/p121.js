/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = prices[prices.length-1];
    let diffMax = 0;

    for (let i=prices.length-1; i>0 ; i--) {
        if (max < prices[i]) {
            max = prices[i];
        }
        if (prices[i-1] < max) {
            diffMax = (diffMax > (max-prices[i-1])) ? diffMax : max-prices[i-1];
        }
    }

    return diffMax;
};