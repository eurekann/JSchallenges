function isPalindromeSpaces(str) {
    let result = "";
    let nStr= str.toLowerCase();
  //let nStr = str.split(" ").join("").toLowerCase();
  for (let i=0;i<nStr.length;i++){
if (nStr[i]>="a"&& nStr[i]<="z"){
    result+= nStr[i];
}
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== result[result.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindromeSpaces("A man a plan a canal Panama"));

