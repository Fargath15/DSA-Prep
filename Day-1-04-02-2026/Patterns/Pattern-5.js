/*
* Pattern-5: Inverted Right Pyramid
*/

class Solution {
    printPattern(n) {
        for (let i = n; i >= 1; i--) {
            let rows = "";
            for (let j = i; j >= 1; j--) {
                rows += "*";
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