/*
* Pattern - 21: Hollow Rectangle Pattern
*/

// 5 5 5 5 5 5 5 5 5 
// 5 4 4 4 4 4 4 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 2 1 2 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 4 4 4 4 4 4 5
// 5 5 5 5 5 5 5 5 5 
class Solution {
    printPattern(n) {

        let size = 2 * n - 1;
        for (let i = 0; i < size; i++) {
            
            let rows = "";
            for (let j = 0; j < size; j++) {

                let top = i;
                let left = j;
                let bottom = size - 1 - i;
                let right = size - 1 - j;

                // find smallest manually
                let minDist = top;
                if (left < minDist) minDist = left;
                if (bottom < minDist) minDist = bottom;
                if (right < minDist) minDist = right;

                rows += (n - minDist) + " ";
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