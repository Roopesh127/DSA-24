// 12345
// 1234
// 123
// 12
// 1

function oppositeNumber(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      pattern += j;
    }

    pattern += "/n";
  }
  return pattern;
}
console.log(oppositeNumber(5));

// function OppositeNumber(n){
//     let pattern = "";
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=(n-i)+1;j++){
//             pattern += j;
//         }
//         pattern += "\n";
//     }
//     console.log(pattern);
// }
// OppositeNumber(5)
