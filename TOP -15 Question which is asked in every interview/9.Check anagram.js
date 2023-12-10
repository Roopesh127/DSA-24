// Write a function to check if two strings are anagrams of each other.

function anagram(n1,n2){
   let r = String(n1).split("").sort().join("");
   let  s = String(n2).split("").sort().join("");
   if(r === s){
    console.log("anagram")
   }
   else{
    console.log("not anagram")
   }
}
 anagram(123,3241);




 
