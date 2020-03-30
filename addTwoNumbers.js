/*
2. Add Two Numbers
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
  var value = l1.val + l2.val;
  var carry;
  if (value > 9) {
    value -= 10;
    carry = 1;
  } else {
    carry = 0;
  }
  console.log(value);
  var result = new ListNode(value);
  var currentResult = result;
  var current1 = l1.next;
  var current2 = l2.next;
  while (current1 || current2) {
    value = (current1 ? current1.val : 0) + (current2 ? current2.val : 0) + carry;
    if (value > 9) {
      value -= 10;
      carry = 1;
    } else {
      carry = 0;
    }
    currentResult.next = new ListNode(value);
    currentResult = currentResult.next;
    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }
  if (carry) currentResult.next = new ListNode(carry);
  return result;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(5);


var l2 = new ListNode(5);


console.log(JSON.stringify(addTwoNumbers(l1, l2)));