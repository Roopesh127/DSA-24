// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// by inbuid function

// let numbers = [13, 46, 24, 52, 20, 9]
// numbers.sort();
// console.log(numbers)

const array = [13, 46, 24, 52, 20, 9]
function selectionSorting() {
    for (let i = 0; i < array.length; i++) {
        let mini = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < arr[mini]) {
                mini = j;
            }
        }
    }
    return array;
}


// By the helping of selection sort method sort this array
// input =  [7,3,8,9,2,4,1,5];
// output = [1,2,3,4,5,7,8,9];

