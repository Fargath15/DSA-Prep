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

    recurse(count) {
        if(count < 1) return;
        console.log(count);
        count--;
        this.recurse(count);
    }

    backtrack(current) {
        // Base case: if current exceeds n, stop recursion
        if (current < 1) return;

        // Recursive call with next number
        this.backtrack(current - 1, n);

        console.log(current);
        // Print current number during backtracking
    }
}

const rec = new Recursion();
const n = 5;
rec.recurse(n);
rec.backtrack(n);

// Time Complexity: O(N), we print our name exactly N times.
// Space Complexity: O(N), stack space used for recursive calls.