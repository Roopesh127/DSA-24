// 1
// 12
// 123
// 1234
// 12345

function numb(x){
    result = "";
    for(let row=1;row<=x;row++){
        for(let col=1;col<=row;col++){
            result+=row;
        }
        result +="\n";
    }
    console.log(result);
}
numb(5)

// function number(x){
//     for(let i=1;i<=x;i++){
//        let row = "";
//        for(j=1;j<=i;j++){
//         row = row+j;
//        }
//        console.log(row)
//     }
// }
// number(5)




// function numb(x){
//     for(let i=1;i<=x;i++){
//         let row ="";
//         for(let j=1;j<=i;j++){
//             row+=j;
//         }
//         console.log(row)
//     }

// }
// numb(5)