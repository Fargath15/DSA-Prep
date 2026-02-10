/*
* Sum of first N Natural Numbers 
*/

// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

// Natural - Starts from 1
// Whole - Starts from 0

// Formula - n(n+1)/2

class Recursion {

    recurse(n) {
        if(n === 1) return 1;
        return n + this.recurse(n - 1);
    }
}

const rec = new Recursion();
const n = 5;
const ans = rec.recurse(n);
console.log(ans);
 
// Time Complexity: O(N),The function is called N times, with each call performing O(1) work.
// Space Complexity: O(N),Due to recursive function calls being stored on the call stack, which grows linearly with N