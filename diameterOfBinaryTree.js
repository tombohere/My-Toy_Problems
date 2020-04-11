/*
Diameter of Binary Tree
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if(!root) return 0;
  let nodeStack = [root];
  let max = 0;
  while (nodeStack.length) {
    let current = nodeStack.pop();
    max = Math.max(max, getEdges(current));
    if (current.left) nodeStack.push(current.left);
    if (current.right) nodeStack.push(current.right);
  }
  return max;

  function getEdges(n) {
    let maxlevel = 0;
    let leftEdges = 0;
    let rightEdges = 0;
    function traverseTree(node, level) {
      maxlevel = Math.max(maxlevel, level);
      if(node.left) traverseTree(node.left, level + 1);
      if(node.right) traverseTree(node.right, level + 1);
    }
    if (n.left) {
      traverseTree(n.left, 1);
      leftEdges = maxlevel;
    }
    if (n.right) {
      maxlevel = 0;
      traverseTree(n.right, 1);
      rightEdges = maxlevel;
    }
    return leftEdges + rightEdges;
  }
};

var diameterOfBinaryTree = function(root) {
  if (!root) return 0;
  let max = 1;
  function getEdges(node) {
    if (!root) return 0;
    let left = getEdges(node.left);
    let right = getEdges(node.right);
    max = Math.max(max, left + right + 1);
    return Math.max(left, right) + 1;
  }
  getEdges(root);
  return max - 1;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root));