// 55555
// 4444
// 333
// 22
// 1

function reverse(x){
    let result = "";
    for(let i=x;i>=1;i--){
        for(j=1;j<=i;j++){
            result+=i;
        }
        result+="\n";
    }
    return result;
}
console.log(reverse(5))