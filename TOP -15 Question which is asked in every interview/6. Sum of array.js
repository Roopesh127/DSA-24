// Write a function to find the sum of all elements in an array.

function SumofArray(arr){
    let sum = 0;
    for(let i=0;i<=arr.length-1;i++){
       sum += arr[i] 
    }
    return sum;
}
console.log(SumofArray([1,2,3]))