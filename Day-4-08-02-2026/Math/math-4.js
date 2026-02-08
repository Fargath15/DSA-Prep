/*
* Find GCD of two numbers
*/

// Example 1:
// Input: N1 = 9, N2 = 12

// Output: 3
// Explanation:
// Factors of 9: 1, 3, 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3
// Greatest common factor: 3 (GCD)
class Solution {

    gcd(n1, n2) {
        // let gcd = 1, gcd1 = 0, gcd2 = 0;
        // for (let i = 1; i <= Math.min(n1, n2); i++) {
        //     gcd1 = n1 % i;
        //     gcd2 = n2 % i;
        //     if (gcd1 === 0 && gcd2 === 0 ) gcd = i;
        // }

        while(n1 > 0 && n2 > 0) {
            if(n1 > n2) {
                n1 = n1 % n2;
            }
            else {
                n2 = n2 % n1;
            }
        }

        if(n1 === 0) {
            return n2;
        }

        return n1;
    }

}

const sol = new Solution();
const num1 = 9, num2 = 12; 
const ans = sol.gcd(num1, num2);
console.log(ans);