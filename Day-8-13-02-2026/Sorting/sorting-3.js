/*
* Insertion Sort Algorithm
*/

// Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. 
// It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. 
// Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

// Example 1:
// Input: arr = [7, 4, 1, 5, 3]
// Output: [1, 3, 4, 5, 7]
// Explanation: The array is sorted in non-decreasing order: 1 ≤ 3 ≤ 4 ≤ 5 ≤ 7.

class Sorting {

    insertionSort(arr) {
        let n = arr.length;

        for (let i = 1; i < n; i++) {
            let key = arr[i]; // Current element as key 
            let j = i - 1;

            // Shift elements that are greater than key by one position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key; // Insert key at correct position
        }

        return arr;
    }
}

const sort = new Sorting();
const arr = [13, 46, 24, 52, 20, 9];
const ans = sort.insertionSort(arr);
console.log(ans);

// Time Complexity: O(n^2), where n is the number of elements in the array. 
// This is because, in the worst case, we may have to compare each element with all the previous elements.

// Space Complexity: O(1), as we are sorting the array in place and not using any additional data structures that grow with input size.