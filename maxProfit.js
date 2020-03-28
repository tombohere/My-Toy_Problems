/*
Your are given an array of integers prices, for which the i-th element is the price of a given stock on day i; and a non-negative integer fee representing a transaction fee.

You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)

Return the maximum profit you can make.

Example 1:
Input: prices = [1, 3, 2, 8, 4, 9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
Buying at prices[0] = 1
Selling at prices[3] = 8
Buying at prices[4] = 4
Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
Note:

0 < prices.length <= 50000.
0 < prices[i] < 50000.
0 <= fee < 50000.

day     1   2   3   4   5   6

        1,  3,  2,  8,  4,  9
    -------------------------
1   1   B,  0, -1,  5,  1,  6

2   3       B, -3,  3, -1,  4

3   2           B,  4,  0,  5

4   8               B, -6, -1

5   4                   B,  3
    -------------------------
    max     0, -1,  5,  1,  6


inititalBuy
Buy
Sell
Hold (with 1 stock or 0 stock)

*/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  var maxProfit = 0;
  function checkTransaction(day = 0, total = 0, held = false, buyprice) {
    if (day === prices.length) {
      if (total > maxProfit) maxProfit = total;
      return;
    }
    if (held) {
      if (prices[day] - fee > buyprice) {
        checkTransaction(day + 1, total + prices[day] - fee, false, 50000);
      }
    } else {
      checkTransaction(day + 1, total - prices[day], true, prices[day]);
    }
    checkTransaction(day + 1, total, held, buyprice);
  }
  checkTransaction();
  return maxProfit;
};

var maxProfit2 = function(prices, fee) {
  var stock = Number.MIN_SAFE_INTEGER;
  var cash = 0;
  for (var price of prices) {
      stock = Math.max(stock, cash - price);
      cash = Math.max(cash, stock + price - fee);
  }
  return cash;
}

console.log(maxProfit2([1,3,2,8,4,9], 2)); // 8
console.log(maxProfit2([1,3,7,5,10,3], 3)); // 6
