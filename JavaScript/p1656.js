/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.arr = [];
    this.ptr = 1;
    this.n = n;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    var res = [];
    this.arr[idKey] = value;

    if (idKey == this.ptr) {
        while (this.arr[this.ptr] && this.ptr<=this.n) {
            res.push(this.arr[this.ptr]);
            this.ptr++;
        }
    }

    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */