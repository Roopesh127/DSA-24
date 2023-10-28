// Find the missing number in an array
// Example 1:
// Input Format: N = 5, array[] = {1,2,4,5}
// Result: 3

// ---> by first method
/*  const n = 5;
const arr = [1,2,3,5]

function missing(){
let add1 = 0;
let add2 =0;
for(let i = 0; i<=arr.length-1;i++){
    add1 += arr[i];
    // console.log("add1",add1)
}
for(let j =0;j<=n;j++){
    add2 += j
    // console.log("add2",add2)
}
return add2 - add1;
}
console.log(missing(n,arr))  */


// -----> by second method

const n = 5;
const arr = [1,2,3,5]













// function missing(n,arr){
//     let new1 ;
//     let new2 ;
//     for(let i =1; i<n;i++){
//          new1 += arr[i];
//     //    console.log(new1)
//     }
//     for(let j=1;j<=arr;j++){
//          new2 += arr[j]
//         // console.log(new2)
//     }
//     return new1 - new2;
// }
// console.log(missing(5,[1,2,3,5]));






// let n =5; // 1+2+3+4+5 = 15

// let arr = [1,2,3,4,5]; // 1+2+3+5 = 11
// // 15 - 11 = 4

// let sumOfN = 0;
// let sumOfarr = 0;
// for(let i=1;i<=n;i++){
//     sumOfN += i;
// }
// // console.log(sumOfN)

// for(let j=0;j<arr.length;j++){
//     sumOfarr += arr[j];
// }
// // console.log(sumOfarr)
// let miss = sumOfN - sumOfarr;
// if(miss == 0){
// console.log("there is no miss")
// }
// else{console.log(miss)}




