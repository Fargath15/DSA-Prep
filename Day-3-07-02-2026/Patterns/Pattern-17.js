/*
* Pattern - 17: Alpha-Hill Pattern
*/

//         A
//       A B A
//     A B C B A
//   A B C D C B A
// A B C D E D C B A

class Solution {
    printPattern(n) {

        for (let i = 0; i < n; i++) {

            let rows = "";

            for (let j = 0; j <= n - i - 1; j++) {
                rows += "  ";
            }

            let ch = "A".charCodeAt(0);
            let mid = 2 * i - 1;

            for (let j = 0; j < 2 * i + 1; j++) {
                rows += String.fromCharCode(ch) + " ";
                if(j <= (mid) / 2) ch++;
                else ch--;
            }

            // for (let j = 0; j <= i; j++) {
            //     rows += String.fromCharCode(val) + " ";
            //     val++;
            // }

            // val--;

            // for (let j = 0; j < i; j++) {
            //     val--;
            //     rows += String.fromCharCode(val) + " ";
            // }

            console.log(rows);
        }
    }
}

const sol = new Solution();
const n = 5;
sol.printPattern(n);

// Time Complexity: O(N²), since two nested loops are used.
// Space Complexity: O(1), as no extra data structures are needed.