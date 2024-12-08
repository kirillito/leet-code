
var RecentCounter = function() {
    this.start = 0;
    this.end = 0;
    // at most 10000 calls
    this.calls = Array(10000).fill(0);
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.calls[this.end] = t;
    
    while (this.start < this.end && (this.calls[this.end] - this.calls[this.start]) > 3000) {
        this.start++;
    }
    this.end++;

    return this.end-this.start;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */