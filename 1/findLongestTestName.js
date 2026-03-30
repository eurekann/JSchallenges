const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Gateway Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called findLongestTestName
// that returns the name of the test
// with the LONGEST testName

function longestTestName(testResults){
let longestTestName ="";

for (let i = 0;i<testResults.length;i++){
    if (testResults[i].testName.length>longestTestName.length){
        longestTestName = testResults[i].testName;
    }
}
return longestTestName;
}
console.log(longestTestName(testResults));