// To check ending of the string matches with given character/s using inbuilt function
// Test Case 1. -----> 

// String: "Special!@#$"
// Character(s): "!@#$"
// Expected Result: True

// Test Case 2. -----> 

// const inputString = "Hello, World!";
// const endingCharacters = "orld!";

function EndingString(stringWord,Matching){
    if(stringWord.endsWith(Matching)){
        return true;
    }
    else{
        return false;
    }
}
console.log(EndingString("Hello, World!","orld!"));