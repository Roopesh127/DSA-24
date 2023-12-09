// Print Fibonacci Series. 
// example -> (0,1,1,2,3,5,8,13....)

// function fabiociSeries(n){
//     let a = 0;
//     let b = 1;
//     for(let i=0;i<=n;i++){
//         let temp = a+b;
//         a=b;
//         b=temp;
//         console.log(a);
//     }
// }
// fabiociSeries(10)



// fabionoci series by recurssion function

function fabioboci(n,a=0,b=1){
    if(n>0){
        console.log(a)
        fabioboci(n-1,b,a+b)
    }
}
fabioboci(10)


