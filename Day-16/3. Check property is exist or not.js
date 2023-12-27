// To check wheather property exist or not in object

let Myobject = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
}

// By hasOwnPoperty

if(Myobject.hasOwnProperty("key1")){
    console.log("propert is exist");
}
else{
    console.log("property is not exist");
}

// By in Property

if("key2" in Myobject){
    console.log("property is exist")
}
else{
    console.log("property is doesn't exist")
}