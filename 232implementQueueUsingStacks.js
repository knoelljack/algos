
var MyQueue = function() {
    this.stack1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push({
        value : x
    })
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack1.shift().value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[0].value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 ? true : false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */