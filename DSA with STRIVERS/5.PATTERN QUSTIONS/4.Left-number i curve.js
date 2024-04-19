// 1
// 22
// 333
// 4444
// 55555

function PaternNumber(n){
   let pattern = "";
   for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        pattern += i;
    }
    pattern += "\n";
   }
   console.log(pattern)
}
PaternNumber(5)