// input = [0, -1, 2, -3, 4, 5, 6, 7, 8, 9];

// second smallest is 1.
// second biggest is 8.

// function secondSmallest(arr) {
//   let largest = 0;
//   let secondLargest = 0;

//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   console.log(largest);
//   console.log(secondLargest);
// }
// return secondSmallest([1, 9, 15, 4, 2, 7, 8, 4]);

// function Second(arr){
//    let largest = 0;
//    let secondlargest = 0;

//    for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secondlargest = largest;
//         largest = arr[i]
//     }
//     else if (arr[i]>secondlargest){
//         secondlargest = arr[i]
//     }
//    }
//    console.log(largest);
//    console.log(secondlargest)
// }
// Second([-3, 7, -8, 15, 0, 12, -5, 9])

// function Second(arr){
//     let largest = 0;
//     let secondlargest = 0;

//     for(let i=0;i<arr.length;i++){
//      if(arr[i]>largest){
//          secondlargest = largest;
//          largest = arr[i]
//      }
//      else if (arr[i]>secondlargest){
//          secondlargest = arr[i]
//      }
//     }
//     console.log(largest);
//     console.log(secondlargest)
//  }
//  Second([-3, 7, -8, 15, 0, 12, -5, 9])

// function work() {
//     let secondSmallest = arr[0];
//     let secondLargest = arr[1];
//     for (let i = 0; i <= arr.length - 2; i++) {
//         if (arr[i] > secondLargest)
//             secondLargest = arr[i]

//         for (let i = arr.length; i > 0; i--) {
//             if (arr[i] < secondSmallest)
//                 secondSmallest = arr[i]
//         }
//         console.log(secondSmallest);
//     }
//     return secondLargest;

// }
// console.log(work())
