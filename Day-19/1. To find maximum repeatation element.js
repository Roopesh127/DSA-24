// To find the maximum repetation of the character in a string
// const input = "aaaabbaaccccccccccccccccccde";

// Output = {
//     character: 'c',
//     count: 18
// }


// BY OBJECT METHOD

function CharacterCount(str){
    let obj = {};
    for(let i of str){
       if(!obj.hasOwnProperty(i)){
        obj[i] = 1;
       }
       else{
        obj[i]+=1;
       }
    }
    // console.log(obj)
    let maxchar = "";
    let maxCount = 0;
    for(let char in obj){
        // console.log(obj[char]);
        if(obj[char] > maxCount){
            maxchar = char;
            maxCount = obj[char];
        }
    }
    console.log("Char = " , maxchar);
    console.log("Count = " , maxCount);

}
CharacterCount("aaaabbaaccccccccccccccccccde");











// function MaximumRepeatation(str){
//     let value = "";
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//       for(let j=i+1;j<str.length;j++){
//         if(str[i] == str[j]){
//             value = str[i]
//             count++;
//         }
//       }
//     }
//     console.log(value)
//     console.log(count)
// }
// MaximumRepeatation("aaaabbaaccccccccccccccccccde");