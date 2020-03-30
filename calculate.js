/*
227. Basic Calculator II
Medium

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.

*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var t;
  var str = s.replace(/\s/g, '');
  while (t = str.match(/(\d+)([\/\*])(\d+)/)) {
    str = str.replace(t[0], t[2] === '/' ? Math.floor(t[1] / t[3]) : t[1] * t[3]);
  }
  while (t = str.match(/(-?\d+)([\-\+])(\d+)/)) {
    str = str.replace(t[0], t[2] === '-' ? t[1] - t[3] : (t[1] - 0) + (t[3] - 0));
  }
  return str;
};

console.log(calculate('3+2*2')); // 7
console.log(calculate('3/2')); // 1
console.log(calculate(' 3+5 / 2 ')); // 5
console.log(calculate('2+3-4')); // 1
console.log(calculate('2-3+4')); // 3
console.log(calculate('1-1+1')); // 1
console.log(calculate('0-2147483647')); // -2147483647