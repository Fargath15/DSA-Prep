// 125. Valid Palindrome

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};


function isAlphaNumeric(ch) {
    return /^[a-z0-9]$/i.test(ch);
}
const s = "A man, a plan, a canal: Panama";
const result = isPalindrome(s);
console.log(result);