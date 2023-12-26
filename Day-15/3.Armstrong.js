// Check Armstrong Number

function Armstrong(num){
    let numStr = `${num}`;
    let splited = numStr.split("");
    let cubesum = 0;
    for(let i=0;i<splited.length;i++){
       cubesum +=  splited[i]*splited[i]*splited[i];
    }
    // console.log(cubesum)
    if(num === cubesum){
      return "Armstrong";
    }
    else{
      return "Not ArmStrong";
    }
}
console.log(Armstrong(370));