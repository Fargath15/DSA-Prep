/*
* Print Fibonacci Series up to Nth term
*/

// Example 1:
// Input: N = 5
// Output: 0 1 1 2 3 5
// Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

class Fibonacci {

    fibonacci(n) {
        let arr = [0, 1];
        for (let i = 2; i <= n; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);            
        }
        return arr;
    }
}

const rec = new Fibonacci();
const n = 5;
const ans = rec.fibonacci(n);
console.log(ans);
 
// Time Complexity: O(N).As we are iterating over just one for a loop.
// Space Complexity: O(1), no extra space used.