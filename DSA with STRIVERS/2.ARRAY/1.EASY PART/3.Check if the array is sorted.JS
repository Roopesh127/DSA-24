// const arr = [2, 4, 1, 5, 7, 3] ,  output => not sorted.
// const arr = [1,2,3,4,5,6] , output => sorted Array.
// cost arr = [5,6,7,2] , output => not sorted.




// BY 1 LOOP METHOD.

function checkSorted(arr){
   for(let i=0;i<arr.length;i++){
    // console.log(arr[i-1])
    if(arr[i]<arr[i-1]){
        return "unsorted";
    }
   }
   return "sorted";
}
console.log(checkSorted([1,2,3,4,5,]))

// BY 2 LOOP METHOD.

// function checkSorted(arr){
//    for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             return "not sorted";
//         }
//     }
//    }
//    return "sorted";
// }
// console.log(checkSorted([1,2,3,4,5,6]));




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



// 2nd approach
// const arr = [4, 3, 7, 2, 7, 0]
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// function isSorted() {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[i])
//                 return false;
//         }
//     }

//     return true;
// }
// console.log(isSorted())