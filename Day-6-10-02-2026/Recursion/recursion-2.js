/*
* Print 1 to N using Recursion
*/

// Input: N = 4
// Output: 1, 2, 3, 4
// Explanation: All the numbers from 1 to 4 are printed.

// Input: N = 1
// Output: 1 
// Explanation: This is the base case.


class Recursion {

    recurse(n, count) {
        if(count === n) return;
        count++;
        console.log(count);
        this.recurse(n, count);
    }

    backtrack(current, n) {
        // Base case: if current exceeds n, stop recursion
        if (current > n) return;

        // Recursive call with next number
        this.backtrack(current + 1, n);

        console.log(current);
        // Print current number during backtracking
    }
}

const rec = new Recursion();
const n = 5;
rec.recurse(n, 0);
rec.backtrack(1, n);

// Time Complexity: O(N), we print our name exactly N times.
// Space Complexity: O(N), stack space used for recursive calls.