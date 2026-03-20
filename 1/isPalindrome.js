function isPalindrome(str)
{
    let result = "";
    let newStr= str.toLowerCase();
    for (let i=0;i<newStr.length;i++){
        result+= newStr[newStr.length-1-i];
    }
    return newStr === result;
}

console.log(isPalindrome('Anna'));