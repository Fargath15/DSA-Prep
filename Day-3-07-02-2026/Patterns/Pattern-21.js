/*
* Pattern - 21: Hollow Rectangle Pattern
*/

// * * * * *
// *       * 
// *       *
// *       *
// * * * * *

class Solution {
    printPattern(n) {

        for (let i = 0; i < n; i++) {
            
            let rows = "";
            
            for (let j = 0; j < n; j++) {
                if(i === 0 || j === 0 || i === n - 1 || j === n - 1) rows += "* ";
                else rows += "  ";
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