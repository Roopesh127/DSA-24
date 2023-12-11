// Finding a missing elements in an array and then add with existing elements.
//  (-1 means if elements not found then it will return always -1 as per rule)

// function MissingElement(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j] - arr[i] > 1){
//                 return arr[i]+1;
//             }
//         }
//     }
//     return "-1";
// }
// console.log(MissingElement([0,1,2,3,4,5,6]));



function MissingElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] - arr[i] > 1) {
                // Found a missing element
                return arr[i] + 1;
            }
        }
    }
    // No missing element found
    return -1;
}

console.log(MissingElement([5, 1, 2, 3, 4, 6,8]));
