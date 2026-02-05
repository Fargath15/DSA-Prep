/*
* Pattern-14: Increasing Letter Triangle Pattern
*/

// A
// A B
// A B C
// A B C D
// A B C D E

class Solution {
    printPattern(n) {

        for (let i = 1; i <= n; i++) {
            let val = 65;

            let rows = "";

            for (let j = 1; j <= i; j++) {
                rows += String.fromCharCode(val++) + " ";
            }

            console.log(rows);
        }
    }
}

const sol = new Solution();
const n = 5;
sol.printPattern(n);

// Time Complexity: O(N²), since two nested loops are used.
// Space Complexity: O(1), as no extra data structures are needed.