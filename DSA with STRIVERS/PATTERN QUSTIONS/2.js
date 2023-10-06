// *
// **
// ***
// ****
// *****
function halftriangle(x) {
    let result = '';
    for (let i = 0; i <= x; i++) {

        for (let j = 0; j <= i; j++) {
            result += "*";
        }
        result+="\n";
    }
    return result;
}
console.log(halftriangle(5))

// function half(x) {
//     let result = "";
//     for (let i = 1; i < x; i++) {
//         for (j = 1; j < i; j++) {
//             result = result + "*";
//         }
//         return "\n";
//     }
//     return result;
// }
// console.log(half(5))