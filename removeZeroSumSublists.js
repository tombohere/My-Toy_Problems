/*
1171. Remove Zero Sum Consecutive Nodes from Linked List
Medium

Add to List

Share
Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.

 

(Note that in the examples below, all sequences are serializations of ListNode objects.)

Example 1:

Input: head = [1,2,-3,3,1]
Output: [3,1]
Note: The answer [1,2,1] would also be accepted.
Example 2:

Input: head = [1,2,3,-3,4]
Output: [1,2,4]
Example 3:

Input: head = [1,2,3,-3,-2]
Output: [1]
 

Constraints:

The given linked list will contain between 1 and 1000 nodes.
Each node in the linked list has -1000 <= node.val <= 1000.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
  var root = head;
  do {
    var current = root;
    var deleted = false;
    var prev = null;
    while (current.next) {
      if (current.val + current.next.val === 0) {
        if (current === head) {
          root = current.next.next;
        } else {
          prev.next = current.next.next;
          deleted = true;
        }
      }
      prev = current;
      current = current.next;
    }
  } while (deleted);
  return root;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var temp = [1,2,-3,3,1];
var head  =  new ListNode(temp[0]);
var current = head;
for (var i = 1; i < temp.length; i++) {
  current.next = new ListNode(temp[i]);
  current = current.next;
}
console.log(JSON.stringify(removeZeroSumSublists(head)));  // [3, 1]  or [1, 2, 1]

var temp = [1,2,3,-3,4];
var head  =  new ListNode(temp[0]);
var current = head;
for (var i = 1; i < temp.length; i++) {
  current.next = new ListNode(temp[i]);
  current = current.next;
}
console.log(JSON.stringify(removeZeroSumSublists(head)));  // [1, 2, 4]

var temp = [1,2,3,-3,-2];
var head  =  new ListNode(temp[0]);
var current = head;
for (var i = 1; i < temp.length; i++) {
  current.next = new ListNode(temp[i]);
  current = current.next;
}
console.log(JSON.stringify(removeZeroSumSublists(head)));  // [1]

var temp = [5,-3,-4,1,6,-2,-5];
var head  =  new ListNode(temp[0]);
var current = head;
for (var i = 1; i < temp.length; i++) {
  current.next = new ListNode(temp[i]);
  current = current.next;
}
console.log(JSON.stringify(removeZeroSumSublists(head)));  // [5, -2, -5]