//Check if a string has duplicate characters.
function hasDuplicates(str){
    let hasDup = false;
    let result = str.split("");
    for (let i = 0;i<result.length;i++){
        for (let j =i+1;j<result.length;j++)
    {
        if (result[i]=== result[j]){
            hasDup = true;
        }
    }
    
}     
return hasDup;
}

console.log(hasDuplicates("hello"));