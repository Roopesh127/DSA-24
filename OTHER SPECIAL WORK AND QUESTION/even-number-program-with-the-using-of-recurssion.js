const evennumberrecurssion = (input) =>{
        const iterate = (i)=>{
            if(i%2==0){
            console.log(i);
            }
            if(i !==0){
                input --;
                iterate(input);
            }
        };
        iterate(input);
    };
    console.log(evennumberrecurssion(8));