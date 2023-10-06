// ****
// ****
// ****
// ****

// function square(x) {
//     for (let i = 0; i <= x; i++) {
//         for (let j = 0; j < x; j++) {
//             return "*";
//         }
//         return '\n';
//     }
// }
// console.log(square(5))

// function square(x) {
//     let result = '';
//     for (let i = 0; i < x; i++) {
//         for (let j = 0; j < x; j++) {
//             result += '* ';
//         }
//         result += '\n';
//     }
//     return result;
// }

// console.log(square(5));

function square(x) {
    let row = "";
    for (let i = 1; i <= x; i++) {
        for (j = 1; j <= x; j++) {
            row = row + "*";
        }
        row += "\n"
    }
    console.log(row)
}
square(5)
