function containsNumber(str) {
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if ("0123456789".includes(letter)) {
      return true;
    }
  }
  return false;
}
console.log(containsNumber('hello'));
