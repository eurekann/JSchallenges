const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called getFailedTests usinf filter function 
// that returns ONLY the failed tests

function failedTestsFilter (testResults){

 const failedTests = testResults.filter(testResult=>testResult.status ==="failed");
 return failedTests;    
}
console.log(failedTestsFilter(testResults));