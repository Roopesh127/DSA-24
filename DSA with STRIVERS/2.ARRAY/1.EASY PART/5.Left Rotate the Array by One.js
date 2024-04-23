// Left Rotate the Array by One
// n = 1;
// input  = [4,5,6,7,1,2,3]
// output = [5,6,7,1,2,3,4]

// function leftRotateArray(arr,n){
//    let newArr = [];
// //    let secondArr = [];
//    for(let i=n;i<arr.length;i++){
//     newArr.push(arr[i])
//    }
//    for(let j=0 ; j<n;j++){
//     newArr.push(arr[j])
//    }
//    return newArr;
// //    let finalArr = [...newArr,...secondArr];

// //    return finalArr;
// }
// console.log(leftRotateArray([4,5,6,7,1,2,3],1));

function leftrotated(arr, n) {
  let new1 = [];
  for (let i = n; i < arr.length; i++) {
    new1.push(arr[i]);
  }
  for (let j = 0; j < n; j++) {
    new1.push(arr[j]);
  }
  return new1;
}
console.log(leftrotated([1, 2, 3, 4, 5], 1));

// const arr = [1,2,3,4,5,6,7]
// function leftRotate(arr,k){
//     let spliced = arr.splice(0,arr.length - (k-1))
//     const merged =  arr.concat(spliced)
//     return merged
// }
// console.log(leftRotate(arr,3))
