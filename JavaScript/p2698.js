/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let res = 1;

    for (let i=9; i<=n; i++) {
        // reduce bruteforce checks
        if (i%9 > 1) {
            continue;
        }

        let p = i*i;
        if (getPartitionSums(p).has(i)) {
            res += p;
        }
    }

    return res;
};

// generates array of sums of all possible partitions
var getPartitionSums = function(x) {
    let sums = new Set();

    let partitions = getPartitions(x);
    
    for (let i=0; i<partitions.length; i++) {
        sums.add(partitions[i].reduce((a,b)=>a+b));
    }

    return sums;
}

var getPartitions = function(x) {
    if (x < 10) {
        return [x];
    }
    let partitions = [];
    let div = 10;
    while (div<x) {
        let p = [];
        p.push(x%div);
        let r = Math.floor(x/div);
        partitions.push(p.concat([r]));
        let subP = getPartitions(r);
        for (let j=0; j<subP.length; j++) {
            partitions.push(p.concat(subP[j]));
        }

        div*=10;    
    }

    return partitions;
}