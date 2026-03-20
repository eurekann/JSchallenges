function hasOnlyNumbers(str) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!"0123456789".includes(letter)) {
      return false;
    }
  }
  return true;
}
console.log(hasOnlyNumbers("123456"));
