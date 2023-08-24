// JAVAscript program to check if two strings are anagrams of each other

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const result = {};
    for (let i=0;i<str1.length;i++) {
        let char = str1[i];
        result[char] = result[char] ? result[char] += 1 : result[char] = 1;
    }

    for (let i=0;i<str2.length;i++) {
        let char = str2[i];
        if (!result[char]) {
            return false;
        }
        else {
            result[char] = -1;
        }
    }
    return true;
}

console.log(anagram('kanak','knaak'));

// By using length:-

// var isAnagram = function(s,t){
//     if(s.length === t.length){
//         console.log("True");
//     }
//     else {
//         console.log("false");
//     }
// };
// isAnagram("car","roc");

// var isAnagram = function(s, t) {
//     if (t.length !== s.length) return false;
//     const counts = [];
//     for (let c of s) {
//         let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
//         counts[i] = (counts[i] || 0) + 1;
//     }
//     for (let c of t) {
//         let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
//         if (!counts[i]) return false;
//         counts[i]--;
//     }
//     return true;
// };
// var isAnagram(s,t){
// if(t.length !==s.length){
//     console.log("false");
// }
// const count = [];
// for(let i = 0; i<s.length ; i++){

// }

// }
// isAnagram("new","ewn")



// 1. By using sorting method

// var isAnagram = function(s, t) {
//     // if(s.split("").sort().join("")===t.split("").sort().join("")){
//         if(s.sort()===t.sort()){
//        console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// };
// isAnagram("car","rac");


// var IsAnagram(s,t){
// if(t.length !== s.length){
//     console.log("false");
// }
// s.split("")
// };
// IsAnagram("carrt","rract")