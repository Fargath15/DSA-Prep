/*
* Count frequency of each element in the array
*/

// Example 1:
// Input: arr[] = {10,5,10,15,10,5};
// Output: 10  3
// 	       5   2
//         15  1

class Hashing {

    getFreq(arr) {

        let map = new Map();

        for (let i = 0; i < arr.length; i++) {
            map.set( arr[i],(map.get(arr[i]) || 0) + 1);
        }

        map.forEach((val, key) => {
            console.log(key, val);
        })
    }
}

const hash = new Hashing();
const arr = [10,5,10,15,10,5];
hash.getFreq(arr);

// Time Complexity: O(N), where N is the number of elements in the array. Each element is processed once.
// Space Complexity: O(N), for storing frequencies of unique elements in the unordered_map.