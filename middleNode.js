/*
Middle of the Linked List
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Note:

The number of nodes in the given list will be between 1 and 100.
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
var middleNode = function(head) {
  var nodes = [];
  var current = head;
  nodes.push(current);
  while (current.next) {
    current = current.next;
    nodes.push(current);
  }
  var mid = Math.floor(nodes.length / 2);
  return nodes[mid];
};

var middleNode = function(head) {
  var count = 1;
  var cur = head;
  while (cur.next) {
    cur = cur.next;
    count++;
  }
  count = Math.floor(count / 2);
  while (count--) {
    head = head.next;
  }
  return head;
};

var middleNode = function(head) {
  var fast = head;
  var slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var root = new ListNode(1);
root.next = new ListNode(2);
root.next.next = new ListNode(3);
root.next.next.next = new ListNode(4);
root.next.next.next.next = new ListNode(5);

console.log(middleNode(root));