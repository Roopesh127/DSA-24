// const arr = [2, 4, 1, 5, 7, 3] // not sorted
// function check() {
//     let x = [...arr].sort()

//     if (x === arr) {
//         return "array is sorted"
//     }
//     else {
//         return "array is not sorted"
//     }
// }
// console.log(check())



// 2nd approach
// const arr = [4, 3, 7, 2, 7, 0]
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function isSorted() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i])
                return false;
        }
    }

    return true;
}
console.log(isSorted())