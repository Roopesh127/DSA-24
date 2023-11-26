// Problem Statement: - 
// You are given an array of prices where prices[i] is the price of a given stock on an ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock. Return the maximum profit you can achieve
// from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and 
// sell on day 5 (price = 6), profit = 6-1 = 5.
// Note: That buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Example 3:
// Input: prices = [3, 6, 8, 10, 1, 4, 7, 5]
// Output: 7
// Explanation: Buy on day 1 (price = 3) and sell on day 4 (price = 10). Profit = 10 - 3 = 7.


function maxProfit(arr){
    let Maxpro = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let currentProfit = (arr[j] - arr[i]);
            Maxpro = Math.max(currentProfit,Maxpro)
        }
    }
     return Maxpro;
}
console.log(maxProfit([7,1,5,3,6,4]))