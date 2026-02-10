/*
* Print Name N times using Recursion
*/

// Input: N = 3
// Output: Ashish Ashish Ashish 
// Explanation: Name is printed 3 times.

class Recursion {

    recurse(n, count, name) {
        if(count === n) return;
        console.log(name);
        count++;
        this.recurse(n, count, name);
    }

}

const rec = new Recursion();
const n = 5;
rec.recurse(n, 0, "John");

// Time Complexity: O(N), we print our name exactly N times.
// Space Complexity: O(N), stack space used for recursive calls.