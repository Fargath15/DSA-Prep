/*
* Pattern - 8: Inverted Star Pyramid
*/

// *********
//  *******
//   *****
//    ***
//     *

class Solution {
    printPattern(n) {
        for (let i = n; i > 0; i--) {
            let rows = "";
            
            for (let j = n - i; j > 0; j--) {
                rows += " ";
            }

            for (let j = 2 * i - 1; j > 0; j--) {
                rows += "*";
            }

            for (let j = n - i; j > 0; j--) {
                rows += " ";
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