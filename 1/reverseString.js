function reverseString (str)
{
    let result= "";
  for (let i = str.length-1; i>=0; i--){
   result+= str[i];
  }  
  return result;
}

console.log(reverseString("hello"));    // → "olleh"
console.log(reverseString("world"))    // → "dlrow"
console.log(reverseString("abcde"))    // → "edcba"