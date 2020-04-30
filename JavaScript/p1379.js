class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

var getTargetCopy = function(original, cloned, target) {
    var traverse = function(t1,t2, s) {
        if (t1 === null) {
            return null;
        }
            
        if (t1.val === s.val) {
            return t2;
        } else {
            let left = traverse(t1.left, t2.left, s);
            if (left !== null) {
                return left;
            } else {
                let right = traverse(t1.right, t2.right, s);
                return right;
            }            
        }
    }
    
    return traverse(original, cloned, target);
};