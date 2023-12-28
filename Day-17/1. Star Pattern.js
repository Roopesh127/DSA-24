// Star Pattern

// *****
// ****
// ***
// **
// *

function StarPattern(n){
    let AStrec = "";
    for(let i=0;i<=n;i++){
        for(let j=i;j<=n-1;j++){
            AStrec += "*";
        }
        AStrec += "\n"
    }
    console.log(AStrec);
}
StarPattern(5)