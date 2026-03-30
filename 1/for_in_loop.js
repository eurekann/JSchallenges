const scores = {
  Alice: 10,
  Bob: 25,
  Charlie: 15,
  Diana: 30
};

for (let key in scores) {
    console.log(`${key} scored ${scores[key]}`);
}
