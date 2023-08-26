-> Swapping of 2 numbers without third variable

function swapping(a=5,b=10){
let c = b-a;
a = a+c;
b= a-c;
console.log(`value of a = ${a}, value of b = ${b}`)
}
swapping();