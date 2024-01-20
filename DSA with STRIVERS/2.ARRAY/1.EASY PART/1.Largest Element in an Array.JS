// input = [1, 2, 3, 4, 5, 6, 7, 8];
// output = 8

// input = [8,10,5,7,9];
// output = 10;

function LargestElement(arr){
   let max = 0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
   }
   console.log(max)
}
LargestElement([1, 2, 3, 4, 5, 6, 7, 8]);



// BY SORTING METHOD

// const arr = [1, 2, 3, 4, 5, 6, 7, 8,];

// function largest() {
//     let x = arr.sort()
//     for (let i = 0; i < x.length; i++)
//         return x[i].length - 1
// }
// console.log(largest())