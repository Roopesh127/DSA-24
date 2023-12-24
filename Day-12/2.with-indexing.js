// // Checking all letters of second words should present in first word, 
// // in the same order using indexOf with indexing

// let str1 = "Roopesh";
// let str2 = "roopesh";

// let currentIndex = -1;

// for (let i = 0; i < str2.length; i++) {
//     let char = str2[i];

//     // Find the index of the current character in str1
//     currentIndex = str1.indexOf(char, currentIndex + 1);

//     // If the character is not found or the index is not in the expected order
//     if (currentIndex === -1 || currentIndex < i) {
//         console.log("false");
//         break;
//     }
    
//     // If it's the last character and all characters are in order
//     if (i === str2.length - 1) {
//         console.log("true");
//     }
// }
