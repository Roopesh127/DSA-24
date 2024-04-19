// 1
// 12
// 123
// 1234
// 12345


function LeftNumber(n){
   let Pattern = "";
   for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        Pattern += j;
    }
    Pattern += "\n";
   }
   console.log(Pattern)
}
LeftNumber(5)



