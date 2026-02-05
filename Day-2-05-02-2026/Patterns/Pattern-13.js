/*
* Pattern - 13: Increasing Number Triangle Pattern
*/

// 1
// 2 3
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15

class Solution {
    printPattern(n) {

        let val = "";
        for (let i = 1; i <= n; i++) {

            let rows = "";

            for (let j = 1; j <= i; j++) {
                rows += ++val + " ";
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