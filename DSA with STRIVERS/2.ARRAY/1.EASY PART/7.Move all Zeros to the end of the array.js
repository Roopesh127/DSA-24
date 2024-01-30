// Example 1:
// Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Example 2:
// Input: 1,2,0,1,0,4,0
// Output: 1,2,1,4,0,0,0
// Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

function RemovingZero(arr){
    let new1 = [];
    let new2 = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            new1.push(arr[i])
        }
        if(arr[i] === 0){
            new2.push(arr[i])
        }
    }
    let final = [...new1,...new2]
    return final;
}
console.log(RemovingZero([1 ,0 ,2 ,3 ,0 ,4 ,0 ,1]))








// const arr =[1,0,2,3,0,4,0,1]
// const arr = [1,2,0,1,0,4,0]
// const arr = [0,1,0,3,1,2]

// const arr = [0]

// function MoveZero(){
//     let zeros = [];
//     let nonZeros = [];

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==0){
//             zeros.push(arr[i]);
//         }
//         if(arr[i]!==0){
//             nonZeros.push(arr[i]);
//         }
//     }
//     let merged = nonZeros.concat(zeros)
//     return merged;
// }
// console.log(MoveZero(arr))