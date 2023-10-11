var myvar = "I am Outside!";

function myfunc() {
    console.log('Primiting myvar inside myfunc', myvar);

    var myvar = "I am inside!";

    new Promise(function (resolve, reject) {
        console.log('Executing the promise');
        resolve();
        reject();
    })
        .then(function () {
            console.log("promise resolved");
        })
        .catch(function (error) {
            console.log(function (error) {
                console.error("promise rejected");
            });
            console.log("does myvar belong to myfunc?", this.myvar
                === 'I am inside!' ? 'Yes' : 'No');

        }

myfunc();
    console.log('started executing myfunc');
    console.log('Printing myVar outside myFunc:', myvar);