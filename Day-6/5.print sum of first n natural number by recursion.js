// Print sum of n natural number by recurssion.

function NaturalNumber(n){
    if(n === 0){
        return 0;
    }
    else{
        return n + NaturalNumber(n-1);
    }
}
console.log(NaturalNumber(10));