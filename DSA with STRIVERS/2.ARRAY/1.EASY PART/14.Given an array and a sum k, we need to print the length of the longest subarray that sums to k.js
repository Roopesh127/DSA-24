// Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// function getLongestSubarray(a, k) {
//     let n = a.length; // size of the array

//     let len = 0;
//     for (let i = 0; i < n; i++) { // starting index
//         for (let j = i; j < n; j++) { // ending index
//             // add all the elements of subarray = a[i...j]
//             let s = 0;
//             for (let K = i; K <= j; K++) {
//                 s += a[K];
//             }

//             if (s === k)
//                 len = Math.max(len, j - i + 1);
//         }
//     }
//     return len;
// }

// let a = [-1, 1, 1];
// let k = 1;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);
