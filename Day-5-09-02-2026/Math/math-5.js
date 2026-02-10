/*
* Check if a number is Armstrong Number or not
*/

// Example:
// Input:N = 153
// Output:True
// Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153

class Solution {

    isArmstrong(n) {

        let original = n;
        let res = 0;

        const len = Math.floor(Math.log10(n) + 1);

        for (let i = 0; i < len; i++) {
            res += (n % 10) ** len;
            n = Math.floor(n / 10);
        }

        return original === res;
    }

}

const sol = new Solution();
const num = 153; 
const ans = sol.isArmstrong(num);
console.log(ans);

// Time Complexity: O(log10N + 1) where N is the input number. The time complexity is determined by the number of digits in the input integer N. In the worst case when N is a multiple of 10 the number of digits in N is log10 N + 1.
// Space Complexity: O(1) as only a constant amount of additional memory for the reversed number regardless of size of the input number.