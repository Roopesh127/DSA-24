// ENTER NUMBER IS PRIME OR NOT

function PrimeNum(n){
    if(n<=1){
        return "prime should be greater than 1";
    }
    for(let i=2;i<n;i++){
       if(n%i === 0){
        return "not prime;"
       }   
    }
    return "Prime Number";
}
console.log(PrimeNum(15));

