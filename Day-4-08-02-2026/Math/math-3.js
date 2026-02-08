/*
* Check if a number is Palindrome or Not
*/

class Solution {

    checkPalindrome(n) {
        let revNum = 0;
        let original = n;
        while (n > 0) {
            let lastDigit = n % 10;
            revNum = revNum * 10 + lastDigit;
            n = Math.floor(n / 10);
        }
        return original === revNum;
    }

}

const sol = new Solution();
const num = 252;
const ans = sol.checkPalindrome(num);
console.log(ans);