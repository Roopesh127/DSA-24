// *
// **
// ***
// ****
// *****
function halftriangle(x) {
    let result = '';
    for (let i = 0; i < x; i++) {

        for (let j = 0; j < i; j++) {
            result += "*";
        }
        return "\n";
    }
    return result;
}
console.log(halftriangle(5))