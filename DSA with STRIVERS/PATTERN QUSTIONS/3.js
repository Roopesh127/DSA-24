// 1
// 12
// 123
// 1234
// 12345


function numb(x){
    var result = "";
    for(let row =1; row<=x; row++){
        for(let col = 1;col<=row;col++){
            result += col;
        }
        result += "\n";
    }
    console.log(result);
}
numb(5)


// function leftnum(x){
//    let result = "";
//    for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         result +=i;
//     }
//     result+="\n";
//    }
//    return result;
// }
// console.log(leftnum(5))