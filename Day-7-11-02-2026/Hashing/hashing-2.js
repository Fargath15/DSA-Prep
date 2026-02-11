/*
* Find the highest/lowest frequency element
*/

// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

class Hashing {

    getFreq(arr) {

        let map = new Map();

        let maxFreq = 0, minFreq = arr.length;
        let maxEle , minEle = 0;

        for (let i = 0; i < arr.length; i++) {
            map.set( arr[i], (map.get(arr[i]) || 0) + 1);
        }

        for (let [element, count] of map.entries()) {
            if (count > maxFreq) {
                maxFreq = count;
                maxEle = element;
            }

            if (count < minFreq) {
                minFreq = count;
                minEle = element;
            }
        }

        console.log(maxEle, minEle);

    }
}

const hash = new Hashing();
const arr = [10,5,10,15,10,5];
hash.getFreq(arr);

// Time Complexity: O(N), where N = size of the array. The insertion and retrieval operation in the map takes O(1) time.
// Space Complexity: O(N), where N = size of the array. It is for the map we are using.