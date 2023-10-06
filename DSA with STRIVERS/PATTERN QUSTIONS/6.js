// *****
// ****
// ***
// **
// *

// function reverse(x){
// for(let i=1;i<=x;i++){
//     let row = "";
//     for(let j =x;j>=i;j--){
//         row = row+"*";
//     }
//     console.log(row)
// }
// }
// reverse(5)

function opposite(x) {
    let result = "";
    for (let i = 1; i <= x; i++) {
        for (j = x; j >= i; j--) {
            result = result + i;
        }
        result += "\n"

    }
    return result;
}
console.log(opposite(5))