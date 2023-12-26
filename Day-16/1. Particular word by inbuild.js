// To check whether particular word/number present in sentence or not using inbuilt function

// Input: str = “Geeks for Geeks”, word = “Geeks” 
// Output: Word is present in the sentence 

// Input: str = “Geeks for Geeks”, word = “eeks” 
// Output: Word is not present in the sentence 

function CheckPresent(str,word){
     if(str.includes(word)){
        return "yes";
     }
     else{
        return "no";
     }
}
// console.log(CheckPresent("Geeks foor Geeks","foor"))
console.log(CheckPresent([1,2,3,4,5,6],3))