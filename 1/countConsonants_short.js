function countConsonantsShort(str){
    let count =0;
    let lower= str.toLowerCase();
    for(let i= 0;i<lower.length;i++){
        let letter = lower[i];
        if (!"aeiou".includes(letter)&&letter>="a"&&letter<="z"){
            // console.log(letter);
            count++;
        }
    }
    return count;
}
console.log(countConsonantsShort("I love apples "));