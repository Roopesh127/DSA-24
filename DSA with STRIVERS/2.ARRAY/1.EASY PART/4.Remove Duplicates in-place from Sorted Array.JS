// By Object Method
const arr = [3, 2, 1, 3, 5, 3]
function RemoveDuplicate() {
    let uniqueobj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueobj.hasOwnProperty(arr[i])) {
            uniqueobj[arr[i]] = 1;
        }
        else {
            uniqueobj[arr[i]] = uniqueobj[arr[i]] + 1
        }
    }
    return Object.keys(uniqueobj).map(Number);
}
console.log(RemoveDuplicate(arr))




// const arr = [1, 1, 2, 2, 2, 3, 3];
// function RemoveDuplicate() {
//     let new1 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[i] !== arr[j]) {
//                 new1 == arr[j]
//             }
//             else i++
//         }
//     }
//     return new1;
// }
// console.log(RemoveDuplicate())



// function removeDuplicates(arr) {
//     let uniqueObject = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueObject.hasOwnProperty(arr[i])) {
//             uniqueObject[arr[i]] = true;
//         }
//     }
//     return Object.keys(uniqueObject).map(Number);
// }

// let arr = [1, 1, 2, 2, 2, 3, 3];
// let uniqueArr = removeDuplicates(arr);
// console.log(uniqueArr); // Output: [1, 2, 3]