/*
* Bubble Sort Algorithm
*/

// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
// This algorithm is not efficient for large data sets as its average and worst-case time complexity are quite high.

// Example 1:
// Input: N = 5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting we get 1,2,3,4,5

class Sorting {

    bubbleSort(arr) {

        for (let i = 0; i < arr.length - 1; i++) {
            let swapped = false;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
                    swapped = true;
                }
            }
            if (!swapped) break;
        }

        return arr;
    }
}

const sort = new Sorting();
const arr = [5,4,3,2,1];
const ans = sort.bubbleSort(arr);
console.log(ans);

// Time Complexity:O(N2) for the worst and average cases and O(N) for the best case. Here, N = size of the array.
// Space Complexity:O(1)