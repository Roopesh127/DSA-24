// Find the number that appears once, and the other numbers twice

// Example 1:
// Input Format: arr[] = {2,2,1}
// Result: 1
// Explanation: In this array, only the element 1 appear once and so it is the answer.

// Example 2:
// Input Format: arr[] = {4,1,2,1,2}
// Result: 4
// Explanation: In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.


// -----> by object method

// function ElementCheck(arr){
//   let obj  = {};
//   for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }
//     else{
//         obj[arr[i]] = 1;
//     }
//   }
//     // console.log(obj) 
//     let result;
//     Object.keys(obj).forEach(key=>{
//         if(obj[key] === 1){
//              result = key;
//         }
//     });
//     console.log(result);
// }
// ElementCheck([1,2,3,3,1,1])



//  ------> by linear search

// function foundOne(arr){
//    for(let i=0;i<arr.length;i++){
//        let num = arr[i];
//        let count = 0; 

//        for(let j=0;j<arr.length;j++){
//         if(arr[j] === num)
//         count++;
//       }
//       if(count === 1){
//         return num;
//        }
//    }
//   return -1; 
// }
// console.log(foundOne([1,2,2,3,3,3,4,4]))

















