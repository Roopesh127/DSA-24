// Problem Statement: Given an array of N integers, write a program to return an element
//  that occurs more than N/2 times in the given array. 
//  You may consider that such an element always exists in the array.



//  Example 1:
// Input Format: N = 3, nums[] = {3,2,3}
// Result: 3
// Explanation: When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

// Example 2:
// Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}
// Result: 2
// Explanation: After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:  N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}
// Result: 4



   function moreOccured(arr){
    let freuency ={};
    for(let element of arr){
        freuency[element] = (freuency[element] || 0) + 1;
    }
    let result;
    for(let key in freuency){
        if(freuency[key] > (arr.length/2)){
        result = Number(key);
      }
    } 
    return result;
   }
   console.log(moreOccured([4,4,2,4,3,4,4,3,2,4]))











// function elementsWithFrequencyGreaterThanHalf(arr) {
//     const frequency = {};
//     for (let element of arr) {
//         frequency[element] = (frequency[element] || 0) + 1;
//     }
//     let result = [];
//     const halfLength = arr.length / 2;
//     for (const key in frequency) {
//         if (frequency[key] > halfLength) {
//             result.push(Number(key));
//         }
//     }

//     return result;
// }

// const array = [4, 4, 2, 4, 3, 4, 4, 3, 2, 4];
// const result = elementsWithFrequencyGreaterThanHalf(array);

// console.log(result);
