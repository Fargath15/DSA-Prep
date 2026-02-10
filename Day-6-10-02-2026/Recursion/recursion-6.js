/*
* Reverse a given Array
*/

// Input: N = 5, arr[] = {5,4,3,2,1}
// Output: {1,2,3,4,5}
// Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

class Reverse {

    reverse(arr) {
        let left = 0, right = arr.length - 1;
        while (left < right) {
            let temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left += 1;
            right -= 1;
        }
        return arr;
    }
}

const rec = new Reverse();
const arr = [1,2,3,4,5,6];
const ans = rec.reverse(arr);
console.log(ans);
 
// Time Complexity: O(n) Where n is the number of elements in the array. Each element is visited at most once due to the two-pointer approach.
// Space Complexity: O(1) No extra space is used other than a few pointers and variables. The array is reversed in-place.