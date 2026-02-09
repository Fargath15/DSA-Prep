/*
* Print all Divisors of a given Number
*/

// Input: N = 36
// Output: [1, 2, 3, 4, 6, 9, 12, 18, 36]  
// Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.

class Solution {

    divisors(n) {

        let res = [];
        for (let i = 1; i <= n; i++) {
            if(n % i === 0) res.push(i);
        }

        return res;
    }
    
    getDivisors(n) {
        let res=[];

        for (let i = 1; i * i <= n; i++) {
            if(n % i === 0) {
                res.push(i);
                if(i !== n/i){
                    res.push(n/i);
                }
            }
        }

        return res;
    }

}

const sol = new Solution();
const num = 36; 
const ans = sol.divisors(num);
const optimalAns = sol.getDivisors(num);
console.log(optimalAns);
console.log(ans);

// Bruteforce:
// Time Complexity: O(N)
// Space Complexity: O(N)

// Optimal:
// Time Complexity: O(sqrt(N)), we check for every number between 1 and sqaure root of N.
// Space Complexity: O(2*sqrt(N)), extra space used for storing divisors.