/*
* Check if a number is prime or not
*/

class Solution {
    
    // Trial Division 
    isPrime(n) {

        if (n <= 1) return false; // 0 and 1 are not prime numbers
        if (n === 2 || n === 3) return true; // 2 and 3 are prime numbers
        if (n % 2 === 0 || n % 3 === 0) return false; // Other even numbers are not prime

        for (let i = 5; i <= Math.sqrt(n); i += 6) {
            if(n % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }

        return true;
    }

}

const sol = new Solution();
const num = 49; 
const ans = sol.isPrime(num);
console.log(ans);

// Time Complexity: O(sqrt(N)), we check for every number between 5 and sqaure root of N.
// Space Complexity: O(1).