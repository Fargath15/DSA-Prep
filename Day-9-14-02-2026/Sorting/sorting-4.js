/*
* Merge Sort Algorithm
*/

// Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the Divide and Conquer approach. 
// It works by recursively dividing the input array into two halves, recursively sorting the two halves and finally merging them back together to obtain the sorted array.

// Input : N=7,arr[]={3,2,8,5,1,4,23}
// Output : {1,2,3,4,5,8,23}
// Explanation : Given array is sorted in non-decreasing order.

class Sorting {

    merge(arr, low, mid, high) {
        const temp = [];
        let left = low; let right = mid + 1;

        while(left <= mid && right <= high) {
            if(arr[left] <= arr[right]) 
                temp.push(arr[left++]);
            else 
                temp.push(arr[right++]);
        }

        while(left <= mid) {
            temp.push(arr[left++]);
        }

        while(right <= high) {
            temp.push(arr[right++]);
        }

        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    mergeSort(arr, low, high) {
        if (low >= high) return;
        const mid = Math.floor((low + high)/2);
        this.mergeSort(arr, low, mid);
        this.mergeSort(arr, mid + 1, high);
        this.merge(arr, low, mid, high);
    }
}

const sort = new Sorting();
const arr = [3,2,8,5,1,4,23];
sort.mergeSort(arr, 0, arr.length - 1);
console.log(...arr);

// Time Complexity: O(N*logN), merging two arrays take linear time and array is recursively divided into halves (logN times).
// Space Complexity: O(N), we use a temporary array to store elements in sorted order.