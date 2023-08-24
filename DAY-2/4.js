// Check if a string is an Anagram

var isAnagram = function(s, t) {
    if(s.split("").sort().join("")===t.split("").sort().join("")){
       console.log("true");
    }
    else {
        console.log("false");
    }
};
isAnagram("car","rac");