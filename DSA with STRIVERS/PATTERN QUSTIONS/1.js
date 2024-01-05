// ****
// ****
// ****
// ****

function Rectengular(n){
    let pattern = "";
    for(let i=1;i<=n;i++){
        for(let j =1;j<=n;j++){
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern)
}
Rectengular(5)


// function square(x){
//     var print ="";
//     for(let row =1;row<=x;row++){
//         for(let col =1;col<=x;col++){
//         print+= "*";
//         }
//         print += "\n";
//     }
//     console.log(print)
// }
// square(5)

// function square(x) {
//     let row = "";
//     for (let i = 1; i <= x; i++) {
//         for (let j = 1; j <= x; j++) {
//             row = row + "*";
//         }
//         row += "\n"
//     }
//     console.log(row)
// }
// square(5)



