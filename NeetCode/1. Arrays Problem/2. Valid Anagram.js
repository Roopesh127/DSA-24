// 2. Valid Anagram

function ValidAnagram(str,ttr){
  if(str.length !== ttr.length){
    return false;
  }

 if (str.split("").sort().join("")===ttr.split("").sort().join("")){
    return true;
 }
    return false;
}
console.log(ValidAnagram("racecar","crrace"))