//Count how many times a character appears.
function countChar(str,el){
    let result = str.split("");
    let count = 0;
    for (let i =0;i<result.length;i++ ){
if (result[i]===el){
    count++;
}
    }
    return count;
}
console.log(countChar("banana", "a"));