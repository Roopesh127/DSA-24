// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

// function Palindrome(x){
// for(let i = 0;i<x.length;i++)
//     var new1 = x[i]; 
// for(let j=x.length-1;j>=0;j--);
//     const new2 = x[j];
//    if(new1 == new2){
//     console.log("Palindrome");
//    }
//    console.log("not palindrome");
// }
// Palindrome(121);



function Palindrome(x) {
    let new1 = '';
    let new2 = '';

    for (let i = 0; i < x.length; i++) {
        new1 = x[i] + new1; // Building the reversed string
    }

    for (let j = x.length - 1; j >= 0; j--) {
        new2 = new2 + x[j]; // Building the original string
    }

    if (new1 === new2) {
        console.log("Palindrome");
    } else {
        console.log("Not palindrome");
    }
}

Palindrome("121");
Palindrome("madam");
Palindrome("anna");
Palindrome("hello");
