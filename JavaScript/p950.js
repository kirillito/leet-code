/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let n = deck.length;

    deck.sort((a,b) => a-b);
    // queue of indexes of cards to take
    let queue = [];
    for (let i=0; i<n; i++) {
        queue.push(i);
    }

    let res = [];
    for (let i=0; i<n; i++) {
        // card from the top of the queue
        res[queue.shift()] = deck[i];
        // move next card to the bottom of queue
        queue.push(queue.shift());
    }

    return res;
};