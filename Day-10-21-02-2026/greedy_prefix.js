// 121. Best Time to Buy and Sell Stock

// Pattern Name : Greedy + Running Minimum (Single Pass Array Pattern)

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        }
        else {
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }

    return maxProfit;
};

const prices = [7,1,5,3,6,4];
const result = maxProfit(prices);
console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(1)

// 🔥 Pattern Category (Interview View)
// This belongs to:
// - Arrays
// - Greedy
// - Single Pass Optimization
// - Prefix tracking
// 🧠 How To Recognize This Pattern Later?

// If problem says:
// - “Maximize profit”
// - “Find maximum difference”
// - “Single transaction”
// - “Must maintain order”
// - “One pass solution preferred”

// ----> Think running minimum + greedy