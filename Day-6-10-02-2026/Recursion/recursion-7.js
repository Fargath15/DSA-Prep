/*
* Check if the given String is Palindrome or not
*/

// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

class Palindrome {

    panlindrome(i, str) {
        if(i >= str.length) return true;
        if(str[i] != str[str.length - i - 1]) return false;
        return this.panlindrome(i + 1, str);
    }
}

const rec = new Palindrome();
const str = "ABCDCBA";
const ans = rec.panlindrome(0, str);
console.log(ans);
 
// Time Complexity: O(N), where N is the length of the string. Each character is checked once.
// Space Complexity: O(N), due to the recursion stack in the worst case (no early termination).