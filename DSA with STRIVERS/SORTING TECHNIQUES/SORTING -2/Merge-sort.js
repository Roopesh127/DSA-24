// Example 1:
// Input: N=5, arr[]={4,2,1,6,7}
// Output: 1,2,4,6,7,

// by bubble sort method

const arr = [4, 2, 1, 6, 7]
function mergeSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }

    }
    console.log(arr)
}

mergeSort(arr)