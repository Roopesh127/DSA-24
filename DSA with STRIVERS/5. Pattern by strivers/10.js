// 54321
// 5432
// 543
// 54
// 5

function pattern(x) {
    let result = "";
    for (let i = 1; i <= x; i++) {
        for (let j = x; j >= i; j--) {
            result += j;
        }
        result += "\n";
    }
    return result;
}
console.log(pattern(5))