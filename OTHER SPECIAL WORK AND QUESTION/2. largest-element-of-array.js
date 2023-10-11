const arr = [1, 2, 3, 4, 5, 6, 7, 8,];

// BY MAX VARIABLE

function largest() {
    let max = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
console.log(largest())

// BY SORTING METHOD

// const arr = [1, 2, 3, 4, 5, 6, 7, 8,];

// function largest() {
//     let x = arr.sort()
//     for (let i = 0; i < x.length; i++)
//         return x[i].length - 1
// }
// console.log(largest())