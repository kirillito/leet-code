/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    return order.filter(x => friends.indexOf(x)>-1);
};