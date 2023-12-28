// *****
// *****
// *****
// *****
// *****

function EqualMatrix(n){
   let Print = "";
   for(let i=1;i<=n;i++){
    for(j=1;j<=n;j++){
        Print += "*";
    }
    Print += "\n";
  }
   console.log(Print)
}
EqualMatrix(5)