// To check whether particular word/number present in sentence or not using custom function

// Input: str = “Geeks for Geeks”, word = “Geeks” 
// Output: Word is present in the sentence 

// Input: str = “Geeks for Geeks”, word = “eeks” 
// Output: Word is not present in the sentence 

function checkWord(arr,num){
    // if(typeof(arr) == 'object'){
    //     for(let i=0;i<arr.length;i++){
    //         // console.log(arr[i])
    //         if(arr[i] == num){
    //             return "yes";
    //         }
    //     }
    //     return "no";
    // }
    // else if (typeof(arr) == 'string'){
    //       let splitted = arr.split(" ")
    //     for(let i=0;i<splitted.length;i++){
    //         // console.log(splitted[i])
    //         if(splitted[i] == num){
    //             return "yes";
    //         }
    //     }
    //     return "no";
    // }
   if(!Array.isArray(arr)){
    arr=arr.split(" ");
   }

    for(let i of arr){
        if(i==num){
            return true;
        }
    }
    return false;
}
// console.log(checkWord([1,2,3,4,5],4))
console.log(checkWord("Geeks for Geeks", "for"))

