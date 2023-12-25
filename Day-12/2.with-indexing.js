// // Checking all letters of second words should present in first word, 
// // in the same order using indexOf with indexing

// let str1 = "Roopesh";
// let str2 = "roopesh";

function checkstr(str1,str2){
    let str3 = str1.toLowerCase()
    let str4 = str2.toLowerCase()

    let count = 0;
    for(let i of str3){
        if(i !== str4.charAt(count)){
            // if(str3[count] !== str4[count]){  --> by using of indexing
            return false;
        }
        count ++;
    }
    return true;
}
console.log(checkstr("Roopesh","roopesh"))




// let count = 0;
    // for(let i of str3){
    //     if(str3[count] !== str4[count]){
    //         return false;
    //    }
    //        count++;
    //  }
    //  return true;