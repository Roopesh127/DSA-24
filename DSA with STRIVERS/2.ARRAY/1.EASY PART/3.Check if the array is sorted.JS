// const arr = [2, 4, 1, 5, 7, 3] ,  output => not sorted.
// const arr = [1,2,3,4,5,6] , output => sorted Array.
// cost arr = [5,6,7,2] , output => not sorted.

// function Issorted(arr) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//       return "not sorted";
//     }
//   }
//   return "sorted";
// }

// console.log(Issorted([1, 2, 3, 4, 5, 6]));

// BY 1 LOOP METHOD.

// function checkSorted(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i - 1]);
//     if (arr[i] < arr[i - 1]) {
//       return "unsorted";
//     }
//   }
//   return "sorted";
// }
// console.log(checkSorted([1, 2, 3, 14, 5, 6]));

// function check() {
//     let x = [...arr].sort()

//     if (x === arr) {
//         return "array is sorted"
//     }
//     else {
//         return "array is not sorted"
//     }
// }
// console.log(check())
