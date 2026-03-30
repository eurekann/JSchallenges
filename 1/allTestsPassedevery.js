const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "passed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Gateway Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

function allTestsPassEvery(testResults){

 return testResults.every(testResult=>testResult.status === "passed");
}
console.log(allTestsPassEvery(testResults));