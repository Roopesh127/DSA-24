// To find the occurance of the character in a string
// const input = findOccurance("cCaaAAbbbBBB")

// Output
// { c: 1, C: 1, a: 2, A: 2, b: 3, B: 3 }

function OccuranceOfCharacter(str){
     let obj = {};
     for(let i=0;i<str.length;i++){
        if(!obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1;
        }else{
            obj[str[i]]++;
        }
     }
     console.log(obj)
}
OccuranceOfCharacter("cCaaAAbbbBBB")