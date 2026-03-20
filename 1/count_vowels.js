function countVowels (str){
    let count =0;
    let lower = str.toLowerCase();
    for (let i = 0; i<lower.length;i++){
        let letter = lower[i];
        if(letter==="a"||letter==="e"||letter===i||letter==="o"||letter==="u"){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Aeoummm"));
