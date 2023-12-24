// Checking all letters of second words should present in first word, 
// in the same order using indexOf without indexing i.e for-of loop.let 

let str1 = "Roopesh";
let str2 = "roopesh";

let isPresent = true;

for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    
    if (str1.indexOf(char) === -1) {
        isPresent = false;
        break;
    }
}

if (isPresent) {
    console.log("true");
} else {
    console.log("false");
}
