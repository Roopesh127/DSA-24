// Given an array consisting of only 0s, 1s,and 2s.
//  Write a program to in-place sort the array without using inbuilt sort functions.
//  ( Expected: Single pass-O(N) and constant space)

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Input: nums = [0]
// Output: [0]

function sortWithoutFunction(arr){
    for(let i=0;i<arr.length;i++){
    for(let j = i+1 ; j<arr.length;j++){
        if(arr[i]>arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
   }
   return arr;
}
console.log(sortWithoutFunction([2,0,2,1,1,0]))


// function sortWithoutFunction(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]];
//             }
//         }
//     }
// }

// const nums = [2, 0, 2, 1, 1, 0];
// sortWithoutFunction(nums);
// console.log(nums);
