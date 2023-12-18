// Sorting of a number array with or without inbuilt methods

// function Sorting(arr){
//     for(let i=0;i<=arr.length-1;i++){
//         for(let j=i+1 ; j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp;
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//             return arr;

// }
// console.log(Sorting([3,2,4,1,9,6,8,11,7,10]));

// --------> by inbuild method

function Sort(arr){
    console.log(arr.sort((a,b)=>(a-b)));
}
Sort([3,2,4,1,9,6,8,11,7,10])
