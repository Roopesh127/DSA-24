// *
// **
// ***
// ****
// *****

function halftriangle(x){
    var print = "";
    for(let row = 1; row<=x ; row++){
        for(let col = 1 ; col<= row; col++){
            print += "*"
        }
        print += "\n"
    }
    console.log(print)
}
halftriangle(5)

// function halftriangle(x) {
//     let result = '';
//     for (let i = 0; i <= x; i++) {

//         for (let j = 0; j <= i; j++) {
//             result += "*";
//         }
//         result+="\n";
//     }
//     return result;
// }
// console.log(halftriangle(5))

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