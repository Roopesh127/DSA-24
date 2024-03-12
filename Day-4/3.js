// To find vowels and its count in a given string

const str = "roopeshaui"
function longestVowels(str){
    let vowels = {};
    for(let i in str){
        if(str[i] == "a" || str[i] ==  "e" || str[i] ==  "i" || str[i] ==  "o" || str[i] ==  "u"){
            if(vowels.hasOwnProperty(str[i])){
                vowels[str[i]]++;
            }
            else{
                vowels[str[i]] = 1;
            }
            
        }
    }
    return vowels;
}
console.log(longestVowels(str))