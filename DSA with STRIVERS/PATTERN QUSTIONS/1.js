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

function square(x) {
    let result = '';
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            result += '* ';
        }
        result += '\n';
    }
    return result;
}

console.log(square(5));

