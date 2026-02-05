/*
* Pattern - 12: Number Crown Pattern
*/

// 1                 1
// 1 2             2 1
// 1 2 3         3 2 1
// 1 2 3 4     4 3 2 1
// 1 2 3 4 5 5 4 3 2 1

class Solution {
    printPattern(n) {

        for (let i = 1; i <= n; i++) {

            let rows = "";

            for (let j = 1; j <= i; j++) {
                rows += `${j} `;
            }

            for (let j = 0; j < 2 * n - 2 * i; j++) {
                rows += "  ";
            }

            for (let j = i; j >= 1 ; j--) {
                rows += `${j} `;
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