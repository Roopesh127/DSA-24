// Checking all letters of second words should present in first word, 
// in the same order using indexOf without indexing i.e for-of loop.let 

   let str1 = "Roopesh";
   let str2 = "roopesh";

   for(let one of str1);
   let first = str1[one];
   
   for(let two of str2);
   let second = str2[two];

   if(first == second){
    console.log("true")
   }
   else{
    console.log("false")
   }