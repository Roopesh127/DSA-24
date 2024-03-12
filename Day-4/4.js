// To find character occurance from the string  or frequency count.

const str = "GeeksforGeeks"

function frequencyCount(str){
    let obj = {};
    for(let i=0;i<=str.length;i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]]++;
        }
        else{
            obj[str[i]] = 1;
        }
        
    }
    return obj;
}
console.log(frequencyCount(str))