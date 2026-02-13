/*
* Selection Sort Algorithm
*/

// Selection Sort is a comparison-based sorting algorithm. 
// It sorts by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it 
// with the first unsorted element.

// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

class Sorting {

    selectionSort(arr) {

        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i+1; j < arr.length; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if(minIndex != i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            }
        }

        return arr;
    }
}

const sort = new Sorting();
const arr = [13,46,24,52,20,9];
const ans = sort.selectionSort(arr);
console.log(ans);

