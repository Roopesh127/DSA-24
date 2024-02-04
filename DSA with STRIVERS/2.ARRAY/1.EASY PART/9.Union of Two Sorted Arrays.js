// Example 1:
// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5} 

// Example 2:
// Input:
// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output: {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12} 














// Union of Two Sorted Arrays

// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// arr1 = [1,2,3,4,5,6,7,11]
// arr2 = [3,5,4,6,9,11,34]
// function sortedUnion(){
//     let newsorted = [];
//     for(let i=0;i<arr1.length;i++){
//         if(!newsorted.includes(arr1[i])){
//             newsorted.push(arr1[i])
//         } 
//     }

//     for(let i=0;i<arr2.length;i++){
//         if(!newsorted.includes(arr2[i])){
//             newsorted.push(arr2[i])
//         }
//     }
//     return newsorted;
// } 
// console.log(sortedUnion(arr1,arr2))