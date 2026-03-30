const testResults = [
  { testName: "Login Test", status: "passed" },
  { testName: "Checkout Test", status: "failed" },
  { testName: "Search Test", status: "passed" },
  { testName: "Payment Gateway Test", status: "failed" },
  { testName: "Logout Test", status: "passed" }
];

// Write a function called findFirstFailedTest
// that returns the FIRST test that failed

function findFirstFailedTest(testResults){

    for (let i = 0; i<testResults.length;i++){
     if (testResults[i].status === "failed"){
        return testResults[i];
     }
    }
    return null;
}

console.log(findFirstFailedTest(testResults));