/*
Number of Islands
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if(!grid.length) return 0;
  let h = grid.length;
  let w = grid[0].length;
  let result = 0;
  function destroy(i, j) {
    grid[i][j] = '0';
    if (i && grid[i - 1][j] - 0) destroy(i - 1, j);
    if (j && grid[i][j - 1] - 0) destroy(i, j - 1);
    if (i < h - 1 && grid[i + 1][j] - 0) destroy(i + 1, j);
    if (j < w - 1 && grid[i][j + 1] - 0) destroy(i, j + 1);
  }
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if(grid[i][j] - 0) {
        result ++;
        destroy(i, j);
      }
    }
  }
  return result;
};

let map = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]];
console.log(numIslands([]));

