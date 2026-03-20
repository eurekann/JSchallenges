function countConsonants(str) {
  let count = 0;
  let lower = str.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    let letter = lower[i];

    if (
      letter >= "a" &&
      letter <= "z" &&
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u" &&
      letter !== " "
    ) {
      count++;
    }
  }
  return count;
}
console.log(countConsonants("I lo1ve apricots"));
