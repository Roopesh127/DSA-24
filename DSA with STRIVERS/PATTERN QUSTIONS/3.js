// 1
// 12
// 123
// 1234
// 12345


function leftnum(x){
   let result = "";
   for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        result +=i;
    }
    result+="\n";
   }
   return result;
}
console.log(leftnum(5))