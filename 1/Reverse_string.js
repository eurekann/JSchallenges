function ReverseStringExplicit(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[str.length - 1 - i];
  }

  return result;
}
console.log(ReverseStringExplicit("I love people"));
