// const input = FrequencySort("cCaaAAbbbBBBaaaa")
//     output = "aaaaaabbbBBBAAcC"

// const input = ("cCaaAAbbbBBBaaaa")
// const split = input.split('')
// const sortt = split.sort()
// console.log(sortt)




// function Countfrequency(str) {
//     const charcount = {}; // created object
//     for (let char of str) {
//         charcount[char] = (charcount[char] || 0) + 1;
//     }
//     const sorted = Object.keys(charcount).sort((a, b) => charcount[b] - charcount[a]);
//     let sortedstring = '';
//     for (const char of sorted) {
//         sortedstring = sortedstring + char.repeat(charcount[char]);
//     }
//     return sortedstring;
// }
// console.log(Countfrequency("cCaaAAbbbBBBaaaa"))



// function frequencySort(s) {
//     // Count the frequency of each character
//     var charCount = {};
//     for (var i = 0; i < s.length; i++) {
//         var char = s[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // Sort characters based on frequency in descending order
//     var sortedChars = Object.keys(charCount).sort(function(a, b) {
//         return charCount[b] - charCount[a];
//     });

//     // Build the sorted string
//     var sortedString = '';
//     for (var j = 0; j < sortedChars.length; j++) {
//         var char = sortedChars[j];
//         sortedString += char.repeat(charCount[char]);
//     }

//     return sortedString;
// }

// var input = frequencySort("cCaaAAbbbBBBaaaa");
// console.log(input); // Output: "aaaaaabbbBBBAAcC"
