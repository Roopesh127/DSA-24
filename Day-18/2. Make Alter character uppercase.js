// Make alternate character to upper case

// const input = "Priya Bagde";
// Output = ("PrIyA BaGdE");

// 1.----->  BY STRING METHOD

function ToconvertUpper(name){
    let str = "";
    for(let i=0;i<name.length;i++){
     if(i%2==0){
         str += name[i].toUpperCase();
     }
     if(i%2 !==0){
         str += name[i].toLowerCase();
     }
    }
    console.log(str);
 }
 ToconvertUpper("Priya Bagde")


//  2. ----> BY ARRAY METHOD

// function AlternativeUpper(name){
//     let newarr = [];
//     for(let i=0;i<name.length;i++){
//         if(i%2==0){
//            newarr.push(name[i]. toUpperCase());
//         }
//         if (i%2 !== 0){
//            newarr.push(name[i].  toLowerCase());
//         }
//     }
//     let str = newarr.join("").toString();
//     console.log(str);
// }
// AlternativeUpper("Roopesh Vishwakarma")