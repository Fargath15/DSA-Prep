/*
* Factorial of a Number : Iterative and Recursive
*/

// Example 1:
// Input: X = 5
// Output: 120
// Explanation: 5! = 5*4*3*2*1

// Formula - n * (n - 1)!

class Recursion {

    iterative(n) {

        if (n <= 1) return 1;
        if (n === 2) return n;
        let fact = 1;
        for (let i = n; i >= 1; i--) {
            fact = fact * i;
        }
        return fact;
    }

    recursive(n) {
        if (n <= 1) return 1;
        if (n === 2) return n
        return n * this.recursive(n - 1);
    }
}

const rec = new Recursion();
const n = 5;
const ans = rec.iterative(n);
console.log(ans);
const ans2 = rec.recursive(n);
console.log(ans2);
 
// Iterative
// Time Complexity: O(n)
// Space Complexity: O(1)

// Recursive
// Time Complexity: O(N), Since the function is being called n times, and for each function, we have only one printable line that takes O(1) time, so the cumulative time complexity would be O(N)
// Space Complexity: O(N), In the worst case, the recursion stack space would be full with all the function calls waiting to get completed and that would make it an O(N) recursion stack space.