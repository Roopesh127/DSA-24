// * 
// * * 
// * * * 
// * * * * 
// * * * * *

function triangle(n){
    for(let i = 0;i<n;i++){
        for(let j=0;j<=i;j++)
        console.log("\n*");
    }
}
console.log(triangle(5));