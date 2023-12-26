// Reverse of a number with mathematical operation.

function Reverse(num){
   let reverse =0;
   let newNum =`${num}`;

   for(let i=0;i<newNum.length;i++){
    rem = (num%10);
    num = Math.floor(num/10);
    reverse += rem;
    if(num!==0){
        reverse*=10;
    }
   }
   console.log(reverse)
}
Reverse(4658893320)


// function Reverse(num){
//     let str = "";
//    let firstrem = num%10;
//    str += firstrem;          // 3

//    let seconsstr = (num/10);       // 12.33
//    let seconddevide = Math.floor(seconsstr);   // 12
//    let secondrem = seconddevide % 10;   // 2
//      str += secondrem;    //32

//    let thirddevide = seconddevide/10;  // 1.2
//    let thirdrem = Math.floor(thirddevide);  // 1
//         str += thirdrem;

//         console.log(str)
// }
// Reverse(123)