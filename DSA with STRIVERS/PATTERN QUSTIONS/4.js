// *
// **
// ***
// ****
// *****
function triangle(x){
    for(let i=1;i<=x;i++){
        let row = "";
        for(let j=1;j<=i;j++){
            row = row + "*";
        }
        console.log(row)
    }
}
triangle(5)

// function tri(x){
//     for(let i=1;i<=x;i++){
//         let row ="";
//         for(let j=1;j<i;j++){
//             row += "*";
//         }
//         console.log(row)
//     }
// }
// tri(6);