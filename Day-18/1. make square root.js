// To find the square root of every element of an array
// const input = [4, 9, 16, 25, 36];

// Output = [2, 3, 4, 5, 6];

function SquareRoot(arr){
    let new1 = []
    for(let i=0;i<arr.length;i++){
         new1.push(Math.sqrt(arr[i]));
    }
    console.log(new1)
}
SquareRoot([4, 9, 16, 25, 36]);