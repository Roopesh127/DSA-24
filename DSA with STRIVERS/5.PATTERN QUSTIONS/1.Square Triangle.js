// ****
// ****
// ****
// ****

function Rectengular(n){
    let pattern = "";
    for(let i=1;i<=n;i++){
        for(let j =1;j<=n;j++){
            pattern += "*";
        }
        pattern += "\n";
    }
    console.log(pattern)
}
Rectengular(5)




