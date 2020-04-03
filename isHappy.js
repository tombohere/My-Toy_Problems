/*
  Happy Number
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var seq = {};
  var str = n;
  var num;
  while (true) {
    num = 0;
    for (var i of str.toString()) {
      num += i * i;
    }
    if (num === 1) return true;
    if (seq[num] !== undefined) return false;
    seq[num] = 1;
    str = num;
  }
};

var isHappy2 = function(n) {
  var s = n;
  var num, tot;
  while (true) {
    tot = 0;
    do {
      num = s % 10;
      s = (s - num) / 10;
      tot +=  num * num;
    } while (s > 0);
    switch (tot) {
      case 1:
        return true;
      case 4:
      case 16:
      case 37:
      case 58:
      case 89:
      case 145:
      case 42:
      case 20:
        return false;
      default:
        s = tot;
    }
  }
};


var d =(new Date()).getTime();
var count = 0;
for (var i = 0; i < 10000000; i++) {
  if(isHappy2(i+1)) {
    count++;
  }
}
console.log((new Date()).getTime() - d);

for ( var i = 0; i < 10; i++) {
  console.log(i + 1, isHappy2(i + 1));
}

