//   function Pattern(n) {
//           let output = "";
//           for (let i = 1; i <= 5; i++) {
//             for (let j = 1; j <= i; j++) {
//               output += j;
//             }
//             output += "\n";
//           }
//           return output;
//         }
//         console.log(Pattern(5));




 function Pattrn(n){
  let output = "";
  for(let i=1;i<=n;i++){
  for(let j=1;j<=i;j++){
     output += j;
    }
        output += "\n";
  }
  return output;
 }  
 console.log(Pattrn(5))  