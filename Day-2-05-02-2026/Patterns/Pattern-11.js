/*
* Pattern - 11: Binary Number Triangle Pattern
*/

// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

class Solution {
    printPattern(n) {

        let val = 0;
        for (let i = 0; i < n; i++) {

            let rows = "";

            for (let j = 0; j <= i; j++) {
                val = 1 - val
                rows += `${val} `;
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