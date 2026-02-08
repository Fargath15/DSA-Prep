/*
* Count digits in a number
*/

class Solution {

    count(n) {
        return Math.floor(Math.log10(n) + 1);
    }

}

const sol = new Solution();
const num = 12345;
const ans = sol.count(num);
console.log(ans);