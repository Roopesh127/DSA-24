// Find the number that appears once, and the other numbers twice

// Example 1:
// Input Format: arr[] = {2,2,1}
// Result: 1
// Explanation: In this array, only the element 1 appear once and so it is the answer.

// Example 2:
// Input Format: arr[] = {4,1,2,1,2}
// Result: 4
// Explanation: In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.

const arr= [1,2,3,1,2,1]

// by linear search
function ones(){
   for(let i=0;i<=arr.length;i++){
    let num = arr[i]
    // console.log(num)
    let count =0;
   for(let j=0;j<=arr.length;j++){
    // console.log(arr[j])
   
    if(num == arr[j])
    count ++;
 }
 if(count === 1){
    return num;
  }

}
    return -1;
}
console.log(ones(arr));








// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function(nums) {
//     nums.sort()
 
 for(let i=0;i<nums.length;i++){
 <!-- if next el same than is check 2 next element -->
     if(nums[i]==nums[i+1]){
         i++
     }else{
         return nums[i]
     }
 }
 };









// function onesTime(){
//     let blank = [];
//     let sorted = arr.sort();
//     // console.log(sorted)
//     for(let i=0;i<=sorted.length;i++){
//        if(arr[i]!== arr[i+1]){
//         blank.push(arr[i]);
//        }
//     }
//     return blank;
// }
// console.log( onesTime(arr));