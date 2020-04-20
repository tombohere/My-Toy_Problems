/*
Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if(!grid.length) return null;
  let n = grid.length - 1;
  let m = grid[0].length - 1;
  let minSum = Infinity;
  const getPath = (x ,y, sum) => {
    if (x === m && y === n) {
      return minSum = Math.min(minSum, sum + grid[y][x]);
    }
    if (x < m) getPath (x + 1, y, sum + grid[y][x]);
    if (y < n) getPath (x, y + 1, sum + grid[y][x]);
  };
  getPath(0, 0, 0);
  return minSum;
};

var minPathSum = function(grid) {
  const map = grid.map(arr => arr.slice());

const rows = map.length;
const cols = map[0].length;

for(let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        if (row === 0 && col === 0) continue;
        if (row !== 0 && col !== 0) {
            map[row][col] += Math.min(map[row - 1][col], map[row][col - 1]);
        } else if (row === 0) { 
            map[row][col] += map[row][col - 1];
        } else if (col === 0) { 
            map[row][col] += map[row - 1][col];
        }
    }    
}
console.log(JSON.stringify(map));
return map[rows - 1][cols - 1];
};

let input = [
  // [1,3,1],
  // [1,5,1],
  // [4,2,1]
  [1,1,3],
  [2,5,1],
  [1,1,1]
];
console.log(minPathSum(input));