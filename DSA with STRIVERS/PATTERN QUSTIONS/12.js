// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function triangel(x) {
    let result1 = "";
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= i; j++) {
            result1 += "*";
        }
        result1 += "\n";
    }

    for (let r = 1; r <= x; r++) {
        for (let s = x; s >r; s--) {
            result1 += "*";
        }
        result1 += "\n";
    }
    console.log( result1);

}
console.log(triangel(5))