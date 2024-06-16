/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    this.sadnessLevel = 0;
    return happiness
        // sort by happiness - we want to select most happy kids first
        .sort((a,b) => b-a)
        .slice(0, k)
        // calculate the sum of all selected kids 
        // while making sure to reduce each subsequent kid's happiness by one
        .reduce((a,b)=> { 
            let res = a+Math.max(0, b-this.sadnessLevel);
            this.sadnessLevel++; 
            return res;
        }, 0);
};