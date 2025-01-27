/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    return removeFriend(n,k) + 1;
}

var removeFriend = function(n, k) {
    if (n === 1) {
        return 0;
    }
    return (removeFriend(n-1,k)+k)%n;
}
/*
// Simulation solution is way too slow. This has to be solved
// using math/recursion 
var findTheWinner = function(n, k) {
    // generate array of player numbers
    // we can operate on zero-based numbering and just add 1 when returning the answer
    let players = [...Array(n+1).keys()]
    let currentIndex = 0;

    for (let i=1; i<=n-1; i++) {
        let stepsLeft = k;
        while (stepsLeft>0) {
            currentIndex = (currentIndex+1) % (n+1);
            
            if (players[currentIndex]>0) {
                stepsLeft--;
            }
        }
        players[currentIndex] = 0;
        console.log(players);
    }

    return players.find(x => x>0);
};
*/