// 1
// 22
// 333
// 4444
// 55555
function number(x) {
    for (let i = 1; i <= x; i++) {
        let row = "";
        for (j = 1; j <= i; j++) {
            row = row + i;
        }
        console.log(row)
    }
}
number(5)

