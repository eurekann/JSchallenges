const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called getFailedTests
// that returns ONLY the failed tests

function getFailedTests(testResults){
    let result =[];
    for (let i=0; i<testResults.length; i++){
        if (testResults[i].status === "failed"){
            result.push(testResults[i]);
        }
    }
    return result;
}

console.log(getFailedTests(testResults));