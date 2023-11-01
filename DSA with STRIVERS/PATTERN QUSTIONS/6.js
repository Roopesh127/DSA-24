// *****
// ****
// ***
// **
// *

function reverse(x){
    result ="";
    for(let row = 1; row<=x;row++){
        for(let col =x; col>=row;col--){
            result+= "*";
        }
        result += "\n"
    }
    console.log(result);
}
reverse(5)

// function opposite(x) {
//     let result = "";
//     for (let i = 1; i <= x; i++) {
//         for (j = x; j >= i; j--) {
//             result = result + i;
//         }
//         result += "\n"

//     }
//     return result;
// }
// console.log(opposite(5))