// Write a function to determine if a given string is a palindrome.

// namam == naman

function Palindrome(str){
    let new1 = "";
    let new2 = "";
    for(let i=0;i<=str.length-1;i++){
        new1 += str[i];
    }
    for(let i=str.length-1; i>=0;i--){
        new2 += str[i];
    }
    // console.log(new2)

    if(new1 === new2){
        console.log("given string is palindrome");
    }
    else{
        console.log("not palindrome")
    }
}
Palindrome("naman")