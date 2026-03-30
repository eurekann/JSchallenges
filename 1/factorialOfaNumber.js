function factorialOfaNumber(n){
    let prResult=1;
    let factorial;

    if (n<0){
        factorial = undefined;
        return factorial;
    }
    else if (n===0 || n === 1){
        factorial = 1;
        return 1;
    }
    else {
     for (let i = 2; i< n;i++ )
     {
       prResult = prResult*i;
     }
     factorial = prResult*n;
     return factorial;
    }

}
console.log(factorialOfaNumber(5));
console.log(factorialOfaNumber(0));
console.log(factorialOfaNumber(-2));