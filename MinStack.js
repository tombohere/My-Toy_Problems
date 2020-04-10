/*
Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
let min = this.getMin();
if (min === undefined) {
  min = x;
} else {
  if (x < min) min = x;  
}
this._stack.push({value: x, min: min});
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  var result = this._stack.pop().value;
  if (this._stack.length) {
    this._min = this._stack[this._stack.length - 1].min;
  } else {
    this._min = -Infinity;
  }
  return result;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if (this._stack.length) {
    return this._stack[this._stack.length - 1].value;
  }
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if (this._stack[this._stack.length - 1] !== undefined) {
    return this._stack[this._stack.length - 1].min;
  }
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
// obj.getMin();
// obj.pop();
// obj.top();
console.log(JSON.stringify(obj));

