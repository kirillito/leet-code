/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;

    // sort initial array
    hand = hand.sort((a,b)=> a-b);

    // calculate frequency map    
    let frequencyMap = {};
    for (let i=0; i<hand.length; i++) {
        frequencyMap[hand[i]] = (frequencyMap[hand[i]] || 0) + 1;
    }

    for (let card of hand) {
        let cardCount = frequencyMap[card] || 0;

        if (cardCount == 0) continue;

        for (let i=1; i<groupSize; i++) {
            let nextCardCount = frequencyMap[card+i] || 0;
            if (nextCardCount == 0) return false;
            frequencyMap[card + i]--;
        }
        frequencyMap[card]--;
    }
    return true;
};