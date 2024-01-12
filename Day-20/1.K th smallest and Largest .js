// To find kth smallest or largest element in an array

// Example 1:
// Input: Array = [1,2,6,4,5,3] , K = 3 
// Output: kth largest element = 4, kth smallest element = 3

// Example 2:
// Input: Array = [1,2,6,4,5] , k = 3
// Output : kth largest element = 4,  kth smallest element = 4

// Example 3:
// const input = findKthSmallestOrLargest[2,1,4,3,6,5,7], 3);

// Output :-
// {
//   smallest: 3,
//   largest: 5,
// }

// function Kthsmallestlargest(arr,k){
//      let sorted = arr.sort((a,b)=>a-b); // [1,2,3,4,5,6,7]
//      let n = sorted.length;
//     return  result = {
//       smallest : sorted[k-1],
//       largest : sorted[n-k],
//     }
// }
// console.log(Kthsmallestlargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],2))



// Do without sorting