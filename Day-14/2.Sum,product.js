// Find SUM, PRODUCT AND AVERAGE of the numbers (accumulation means collection)
function CalculationFunction(a,b,c){
    const sum = () =>{
        console.log("sum = " , a+b+c); 
    }
    const product = () =>{
        console.log("Product = ", a*b*c); 
    }
    const average = () =>{
        console.log("Average = " , (a+b+c)/3);
    }
    sum();
    product();
    average();
 }
 CalculationFunction(10,20,30)