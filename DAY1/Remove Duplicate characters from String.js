// Question :- Remove Duplicate characters from String

// var str = "roopeshr";
// var n = str.length;
//  removeduplicate(str, n);

// function removeduplicate(){
//     var s = new set();
//     for(var i=0;i<n;i++)
//     s.add(str[i]);
//     for(const v of s){
//         document.write(v);
//     }
// }





function removeduplicates(str) {
  const uniquechars = [];
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!uniquechars[char]) {
      result += char;
      uniquechars[char] = true;
    }
  }
  return result;
}
const inputstring = "nooami";
const stringwithoutduplicates = removeduplicates(inputstring);
console.log(stringwithoutduplicates);


//    const str = "roopeshr viiidd";
//    var obj = {};
//     let result = "";
//    for(let i=0;i<str.length;i++){
//     if(!obj.hasOwnProperty(str[i])){
//       obj[str[i]]=true
//       result = result + str[i];
//     }
//    }
//   //  return result;
// console.log(result);





