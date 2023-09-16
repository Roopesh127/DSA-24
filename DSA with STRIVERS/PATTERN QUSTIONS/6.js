// *****
// ****
// ***
// **
// *

function reverse(x){
for(let i=1;i<=x;i++){
    let row = "";
    for(let j =x;j>=i;j--){
        row = row+"*";
    }
    console.log(row)
}
}
reverse(5)