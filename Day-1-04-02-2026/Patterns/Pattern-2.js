/*
* Pattern-2: Right-Angled Triangle Pattern
*/

// *
// * *
// * * *
// * * * *
// * * * * *

class Solution {
    printPattern(n) {
        for(let i=1; i<=n; i++) {
            let rows = "";
            for(let j=1; j<=i; j++) {
                rows += "* ";
            }
            console.log(rows);
        }
    }
}

const sol = new Solution();
const n = 5; // You can change this value to test with different inputs
sol.printPattern(n);

// Time Complexity: O(N²), since two nested loops are used.
// Space Complexity: O(1), as no extra data structures are needed.