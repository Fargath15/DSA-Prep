/*
* Pattern-18: Alpha-Triangle Pattern
*/

// E
// D E
// C D E
// B C D E
// A B C D E

class Solution {
    printPattern(n) {

        for (let i = 0; i < n; i++) {

            let rows = " ";

            let a = "A".charCodeAt(0);

            for (let ch = a + n - i - 1; ch <= a + n - 1; ch++) {
                rows += String.fromCharCode(ch) + " ";
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