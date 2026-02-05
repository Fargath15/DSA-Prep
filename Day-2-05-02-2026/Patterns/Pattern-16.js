/*
* Pattern - 16: Alpha-Ramp Pattern
*/

// A
// B B
// C C C
// D D D D
// E E E E E

class Solution {
    printPattern(n) {

        for (let i = 0; i < n; i++) {
            let val = 65;

            let rows = "";

            val += i;
            for (let j = 0; j <= i; j++) {
                rows += String.fromCharCode(val) + " ";
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