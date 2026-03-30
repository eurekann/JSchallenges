const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Gateway Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

function findFirstFailedTestfind(testResults){
    const result = testResults.find(testResult =>testResult.status ==="failed");
    return result; 
}
console.log(findFirstFailedTestfind(testResults));