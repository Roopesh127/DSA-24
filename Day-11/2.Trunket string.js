// Truncate the string upto specific character. For ex ("I am priya", 3) => "I am..."

function Trunkcharacter(str,n){
let Blankstr = "";
for(let i=0;i<n;i++){
    if(str[i] == " "){
        n++;
    }
     Blankstr+=str[i];
}
console.log(Blankstr + "...")
}
Trunkcharacter("I am Roopesh",3)

// function Trunket(str,n){
//     var Blankstr = "";
//     for(let i=0;i<n;i++){
//         if(str[i] == " "){
//             n++
//         } 
//         Blankstr += str[i];
//     //  console.log(str[i])
//     }
//     // console.log(Blankstr)
//    console.log(Blankstr + ("..."))
// }
// // Trunket("I a  m Priya",3)
// Trunket("I am mmmm roopesh",5)