// Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

// by inbuid function

// let numbers = [13, 46, 24, 52, 20, 9]
// numbers.sort();
// console.log(numbers)

// By the helping of selection sort method sort this array
// input =  [7,3,8,9,2,4,1,5];
// output = [1,2,3,4,5,7,8,9];

function SelectionSort(arr){
   for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
   }
   return arr;
}
console.log(SelectionSort([7,3,8,9,2,4,1,5]));