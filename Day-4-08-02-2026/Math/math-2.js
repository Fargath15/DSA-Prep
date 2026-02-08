/*
* Reverse Digits of A Number
*/

class Solution {

    reverse(n) {
        let revNum = 0;
        while (n > 0) {
            let lastDigit = n % 10;
            revNum = revNum * 10 + lastDigit;
            n = Math.floor(n / 10);
        }
        return revNum;
    }

}

const sol = new Solution();
const num = 12345;
const ans = sol.reverse(num);
console.log(ans);