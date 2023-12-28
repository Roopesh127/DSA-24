// 11111
// 2222
// 333
// 44
// 5

function NumberPattern(n){
   let print = "";
   for(let i=1;i<=n;i++){
    for(let j=1;j<=n-(i-1);j++){
        print += i;
    }
    print += "\n";
   }
   console.log(print)
}
NumberPattern(5)