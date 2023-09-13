// 1
// 12
// 123
// 1234
// 12345

function leftnumber(x) {
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= i; j++) {
            console.log(j)
        }
        console.log(i)
        // console.log('\n')
    }
}
console.log(leftnumber(5))